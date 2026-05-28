<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "admin@freshtel.online"; // Update this to the actual Freshtel sales email
    $subject = "NEW APPLICATION: " . htmlspecialchars($_POST['name']) . " [" . htmlspecialchars($_POST['plan']) . "]";

    // Extracting nested data
    $address = json_decode($_POST['address'], true);
    $addons = json_decode($_POST['addons'], true);

    // Clean data for display
    $cleanPlan = htmlspecialchars($_POST['plan']);
    $cleanName = htmlspecialchars($_POST['name']);
    $cleanEmail = htmlspecialchars($_POST['email']);
    $cleanMobile = htmlspecialchars($_POST['mobile']);
    $cleanLocation = htmlspecialchars($_POST['location']);

    $emailTemplate = "
    <div style='background-color: #f6f9fc; padding: 40px 10px; font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;'>
        <table align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.1);'>
            <tr>
                <td style='background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%); padding: 50px 40px; text-align: center;'>
                    <div style='color: #ffffff; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; margin: 0;'>Freshtel</div>
                    <div style='color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 5px; margin-top: 8px;'>Premium Fiber Internet</div>
                </td>
            </tr>
            <tr>
                <td style='padding: 40px;'>
                    {{INTRO}}
                    
                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFF4F4; border-radius: 16px; margin: 30px 0;'>
                        <tr>
                            <td style='padding: 30px;'>
                                <div style='font-size: 11px; font-weight: 900; color: #EF4444; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;'>Chosen Internet Plan</div>
                                <div style='font-size: 26px; font-weight: 900; color: #1B365D; margin-bottom: 4px;'>{$cleanPlan}</div>
                                <div style='font-size: 15px; color: #4b5563; font-weight: 600;'>{$_POST['contract']} Months Contract • RM " . number_format((float)$_POST['contractPrice'], 2) . "/mo</div>
                            </td>
                        </tr>
                    </table>

                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='margin-bottom: 35px;'>
                        <tr>
                            <td width='50%' style='padding-right: 20px; vertical-align: top;'>
                                <div style='font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;'>Applicant Info</div>
                                <div style='font-size: 14px; color: #1f2937; line-height: 1.8;'>
                                    <strong style='font-size: 16px; color: #111827;'>{$cleanName}</strong><br>
                                    <span style='color: #64748b;'>NRIC:</span> {$_POST['nricPassport']}<br>
                                    <span style='color: #64748b;'>Mobile:</span> {$cleanMobile}<br>
                                    <span style='color: #64748b;'>Email:</span> {$cleanEmail}
                                </div>
                            </td>
                            <td width='50%' style='padding-left: 20px; vertical-align: top; border-left: 1px solid #f1f5f9;'>
                                <div style='font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;'>Installation</div>
                                <div style='font-size: 14px; color: #1f2937; line-height: 1.8;'>
                                    <strong style='font-size: 16px; color: #111827;'>{$_POST['installationDate']}</strong><br>
                                    <span style='color: #64748b;'>Slot:</span> {$_POST['installationSession']}<br>
                                    <span style='color: #64748b;'>Location:</span> {$cleanLocation}
                                </div>
                            </td>
                        </tr>
                    </table>

                    <div style='padding: 25px; background-color: #f8fafc; border-radius: 16px; margin-bottom: 35px; border: 1px solid #f1f5f9;'>
                        <div style='font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;'>Service Address</div>
                        <div style='font-size: 15px; color: #334155; line-height: 1.6; font-weight: 500;'>
                            {$address['unit']}, {$address['street']},<br>
                            {$address['city']}, {$address['zip']} {$address['state']}
                        </div>
                    </div>

                    " . (!empty($addons['voicePlanName']) || !empty($addons['routerName']) ? "
                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-top: 1px solid #f1f5f9; padding-top: 30px; margin-bottom: 35px;'>
                        <tr>
                            <td>
                                <div style='font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;'>Selected Add-ons</div>
                                " . (!empty($addons['voicePlanName']) ? "<div style='background: #fdfdfd; padding: 12px 15px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #f0f0f0; font-size: 14px;'><strong>Voice:</strong> {$addons['voicePlanName']} <span style='float: right; color: #EF4444;'>+RM ".number_format($addons['voicePlanPrice'], 2)."</span></div>" : "") . "
                                " . (!empty($addons['routerName']) ? "<div style='background: #fdfdfd; padding: 12px 15px; border-radius: 8px; border: 1px solid #f0f0f0; font-size: 14px;'><strong>Router:</strong> {$addons['routerName']} <span style='float: right; color: #EF4444;'>+RM ".number_format($addons['routerPrice'], 2)."</span></div>" : "") . "
                            </td>
                        </tr>
                    </table>
                    " : "") . "

                    " . (!empty($addons['promoCode']) || !empty($_POST['remarks']) ? "
                    <div style='padding: 25px; background-color: #f0f9ff; border-radius: 16px; border-left: 5px solid #3B82F6;'>
                        " . (!empty($addons['promoCode']) ? "<div style='margin-bottom: 10px;'><span style='font-size: 10px; font-weight: 900; color: #3B82F6; text-transform: uppercase;'>Promo Code</span><br><strong style='font-size: 16px; color: #1e3a8a;'>{$addons['promoCode']}</strong></div>" : "") . "
                        " . (!empty($_POST['remarks']) ? "<div><span style='font-size: 10px; font-weight: 900; color: #3B82F6; text-transform: uppercase;'>Notes</span><br><div style='font-size: 14px; color: #1e3a8a; font-style: italic;'>\"{$_POST['remarks']}\"</div></div>" : "") . "
                    </div>
                    " : "") . "
                </td>
            </tr>
            <tr>
                <td style='background-color: #1a1a1a; padding: 40px; text-align: center;'>
                    <div style='color: #ffffff; font-size: 14px; font-weight: 700; margin-bottom: 15px;'>Need assistance?</div>
                    <div style='font-size: 12px; color: #94a3b8; line-height: 2;'>
                        <a href='tel:0390782963' style='color: #EF4444; text-decoration: none; font-weight: 700;'>03-9078 2963</a> • 
                        <a href='mailto:admin@freshtel.online' style='color: #EF4444; text-decoration: none; font-weight: 700;'>admin@freshtel.online</a><br>
                        <span style='color: #4b5563; text-transform: uppercase; letter-spacing: 1px;'>Freshtel Internet Sdn Bhd</span><br>
                        &copy; " . date('Y') . " All rights reserved.
                    </div>
                </td>
            </tr>
        </table>
    </div>
    ";

    // Sales Message
    $salesIntro = "<div class='intro'><strong>Action Required:</strong> A new subscription application for <strong>{$cleanPlan}</strong> has been submitted.</div>";
    $message = "<html><body>" . str_replace('{{INTRO}}', $salesIntro, $emailTemplate) . "</body></html>";

    // Boundary for attachments
    $boundary = md5(time());

    // Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: \"Freshtel Sales\" <admin@freshtel.online>\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

    // Message body
    $body = "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Handle Attachments
    $fileFields = ['icFile', 'spaFile', 'additionalFile', 'paymentSlipFile', 'applicationFormFile'];
    foreach ($fileFields as $field) {
        if (isset($_FILES[$field]) && $_FILES[$field]['error'] === UPLOAD_ERR_OK) {
            $fileName = $_FILES[$field]['name'];
            $fileTmp = $_FILES[$field]['tmp_name'];
            $fileType = $_FILES[$field]['type'];
            $content = file_get_contents($fileTmp);
            $encodedContent = chunk_split(base64_encode($content));

            $body .= "--" . $boundary . "\r\n";
            $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
            $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= $encodedContent . "\r\n";
        }
    }

    // Handle extra files array if any
    if (isset($_FILES['files'])) {
        $fileCount = count($_FILES['files']['name']);
        for ($i = 0; $i < $fileCount; $i++) {
            if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
                $fileName = $_FILES['files']['name'][$i];
                $fileTmp = $_FILES['files']['tmp_name'][$i];
                $fileType = $_FILES['files']['type'][$i];
                $content = file_get_contents($fileTmp);
                $encodedContent = chunk_split(base64_encode($content));

                $body .= "--" . $boundary . "\r\n";
                $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
                $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
                $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
                $body .= $encodedContent . "\r\n";
            }
        }
    }

    $body .= "--" . $boundary . "--";

    // Send email to Freshtel
    $sentToSales = mail($to, $subject, $body, $headers);

    // Send confirmation to User (with summary)
    $userSubject = "Confirmation: Your Freshtel Application for " . $cleanPlan;
    $userHeader = "MIME-Version: 1.0\r\nContent-type:text/html;charset=UTF-8\r\nFrom: \"Freshtel Internet\" <admin@freshtel.online>\r\n";
    
    $userIntro = "
    <div style='padding: 30px; background: #fdfdfd; border-radius: 16px; border: 1px solid #f0f0f0; margin-bottom: 30px;'>
        <h2 style='margin-top: 0; color: #111827; font-size: 22px;'>Hi {$cleanName},</h2>
        <p style='color: #4b5563; font-size: 15px; line-height: 1.6;'>Thank you for choosing Freshtel! We've successfully received your application. Our representative will contact you shortly via phone or WhatsApp to finalize your installation.</p>
        <div style='margin-top: 20px; padding: 15px; background: #FFF4F4; border-radius: 10px; color: #EF4444; font-weight: 700; font-size: 14px; text-align: center; border: 1px dashed #EF4444;'>
            Stay tuned! We'll be in touch soon.
        </div>
    </div>
    ";
    
    $userMessage = "<html><body style='margin:0;padding:0;'>" . str_replace('{{INTRO}}', $userIntro, $emailTemplate) . "</body></html>";
    mail($_POST['email'], $userSubject, $userMessage, $userHeader);

    if ($sentToSales) {
        echo json_encode(["status" => "success", "message" => "Application submitted successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
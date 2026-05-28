'use client';

import { useState } from 'react';

const STEPS = ['PLAN', 'DETAIL', 'ADD-ON', 'PREVIEW'];

const DEFAULT_PLANS = {
  RESIDENTIAL: [
    { label: "PC 100 Mbps", value: "pc_100", contracts: [{ value: 0, price: "99" }, { value: 12, price: "79" }, { value: 24, price: "69" }] },
    { label: "PC 300 Mbps", value: "pc_300", contracts: [{ value: 12, price: "119" }, { value: 24, price: "99" }, { value: 36, price: "89" }] },
    { label: "PC 500 Mbps", value: "pc_500", contracts: [{ value: 12, price: "149" }, { value: 24, price: "129" }, { value: 36, price: "109" }] }
  ],
  BUSINESS: [
    { label: "BPC 100 Mbps", value: "bpc_100", contracts: [{ value: 24, price: "139" }] },
    { label: "BPC 300 Mbps", value: "bpc_300", contracts: [{ value: 24, price: "199" }] },
    { label: "BPC 500 Mbps", value: "bpc_500", contracts: [{ value: 24, price: "299" }] }
  ]
};

const LOCATIONS = [
  { name: "168 Park Selayang", street: "Jalan Kuching", city: "Batu Caves", zip: "68100", state: "Selangor", user: true, business: false },
  { name: "188 Suites", street: "Jalan Sultan Ismail, City Centre", city: "Kuala Lumpur", zip: "50250", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "1Medini Condominium", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: true, business: false },
  { name: "1Medini Condominium Retails", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: false, business: true },
  { name: "22 Macalisterz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "8scape Residensi", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "99 Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "ANYA Shorea Park Residence 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "ARC Austin Hill @ Johor", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Admiral Residences @ Kota Laksamana", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Aera Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Alanis Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Alinea Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Almyra Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Alstonia Residence Sungai Long", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Amber Cove Premier Suites Melaka", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Amberside", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Anderson Residences @ Ipoh", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Anggerik Wira", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Anggun Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Apex Tower @ CyberSquare", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Apex Tower Retails @ CyberSquare", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Aradia Residence @ Lake City", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Aradia Residence Commercial @ Lake City", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Arena Residence 1", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Arena Residence 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Aster Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Astoria Ampang", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Atlantis Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bangsar Hill Park Condominium (D, E)", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bay Laurel @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bay Point @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bayu Angkasa", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Beletime @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Bell Avenue", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Bell Suite", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bennington", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bercham 138 @ Apartment Bakti Putra", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bercham Prima Ipoh Kiara @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Bora Residence @ Tropicana Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Botanika @ Tebrau Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Brezza One Residency", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Brezza One Residency Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Cantara Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Centroz", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Cerrado @ Southville City", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Ceylonz Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Chambers Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Citizen 2 @ Old Klang Road", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Clio Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Cloud Tree", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Colony @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Colony Retail @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Conezion", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Crystal Creek Resort", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Clover Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Cosmos Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Erica Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Festivo Residence @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Ivo Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Nuri Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Quince Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Rapport", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Ruby @ Puchong", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Terra Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Vervain Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "D'Vine Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Damai 88", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Eaton Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Edusphere Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Emira Residence", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Empire City_Block A_Halo", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block B_Sunday", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block C_Colonial Loft", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block D_My Loft", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block E_5-Star Marriot International Hotel", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block E_Serviced Office Suites", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_Block F_5-Star Autograph International Boutique Hotel", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block G", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_Block H_Hextar Tower", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_Block J_Victoria Suite", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_Block L", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Empire City_Block M_Soho", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_Block N_MyEG", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Empire City_CGV Hotel", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Expressionz Professional Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Forest City Ataraxia Park 1", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Ataraxia Park 2", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Ataraxia Park 3", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Ataraxia Park 3 @ Retail", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Ataraxia Park 4", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Cerulean Bay", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Regalia Park", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Starview Bay", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Forest City Starview Bay @ Retails", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Gaya Resort Homes", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Giverny Walk", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Glisten Hill Condominium @ Juru", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Gurneymas Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "HCK Tower Damansara @ Empire City", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Helix2 (Residensi Heliks)", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Ho Hup Tower @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "IFS Seri Iskandar", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "IOI Rio", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Icon City", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Idaman Abadi", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Idaman Abadi 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Ipoh Convention Centre (ICC)", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Isola KLCC", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Jasper Square", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "KOTA PUTERI, BATU ARANG", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "KSL Residences 2 @ Kangkar Tebrau", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "KSL Residences @ Daya", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Kampus West City Condominium", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Ken Rimba", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Kensho Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Kenwingston Platz Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Kenwingston Skyloft", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "KepongMas", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Kings Bay @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "LEA By The Hills", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "LSH 33", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "LSH 33 Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "La Thea Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "LakeFront Residence @ Cyberjaya", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Laman Damai @ Country Garden Central Park P6", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Laman Glasier @ Country Garden Central Park P2", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Laman Harmoni @ Country Garden Central Park P5", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Legend Heights @ Sri Segambut", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Lily Apartment @ Kuchai Lama", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Lovell @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Luxe @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Luxe Retail @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "M Adora", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M Arisa Sentul", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M Centura", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M Oscar", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M Suite @ Menjalara", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M Vertica", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "M101 Dang Wangi", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "MH Unilodge", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "MIRAI Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Majestic Maxim", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Majestic Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Maple Residences ", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Marbella", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Meldrum Height Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Menara HLA", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Menara Sunsuria", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Meridin Medini @ Ramada", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Meru Prima @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mesahill Phrase 1 - Tower A", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mesahill Phrase 2 - Tower B", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mesahill Phrase 3 - Tower C, D, E", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mesahill Phrase 4 - Premier 1 & 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mesamall", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Metro Cheras", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Metro Kepong", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Millerz Square A, B", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Millerz Square Retail", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Millerz Square Tower C", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Millerz Square Tower D", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Millerz Square Tower E", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mira @ Shorea Park", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mizumi", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Monet Garden", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Monet Lily", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Monet Springtime", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mossaz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Mutiara Melaka Beach Resort", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Nadayu 801 Subang Murni Apartment", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Nadayu 801 Subang Murni Apartment @ Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Nest 2 Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Netizen", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Nidoz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Nigella Park @ Forest City", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Noa Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Nouvelle Meru", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Novo 8 Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Octagon Ipoh @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "One 49 Resident", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "One Cochrane Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "One Maxim", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Ooak Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Optimus Medini", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Opus Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "PJ Midtown Residential", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "PJ Midtown Residential Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "PPAM Dalur", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "PPAM Setapak Riviera", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Palazzo Ipoh Garden East", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Palm Hill Residence 1", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Palm Hill Residence 3", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Palmyra", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Pangsapuri Opal", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Pangsapuri Selangorku @ Amansiara", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Pangsapuri Seri Iskandar @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Paradigm Residence @ Johor", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Pavilion", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Paxtonz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Piccadilly Service Residence @ Greentown", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Pinnacle Sri Petaling", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Prima Falim @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Prima Kepayang", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Putra One Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "R&F Princess Cove 1", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "R&F Princess Cove 1 Retails", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "R&F Princess Cove 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "R&F Princess Cove 2 Retails", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Reizz Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Res280 Condominium", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Res280 Condominium Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Residence Seri Serindit", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Adelia", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Adelia 2", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Adelia 3", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Adelia 4", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Agile Delima", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Residensi Alamanda", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Aman Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Residensi Jalilmas", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Lili", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi M Luna", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Maarof", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Mutiara", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Nexus Kajang", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Selangorku Begonia", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Residensi Skyluxe", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Residensi Sutera 7", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Retail @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Rev.O @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Riveria City KL Sentral", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Royal Strand Country Garden @ Danga Bay", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Rubica", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Savanna Executive Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Scarletz Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Seni Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sensory Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sentral Suites KL Sentral", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sentul Point Suite", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sentul Point Suite Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Seri Topaz Puchong", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Seruni", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Setia Sky 88", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Shang Height Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sierra 16", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Silk Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sky Awani 2", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Sky Awani 3", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sky Condominium", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sky Meridien", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "SkyBlox @ SkySanctuary", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Skypark@Cyberjaya", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sovo @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Space Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sri Carcosa", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Stellar Suites", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "SummerSkye Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sunsuria Forum - Soho 2", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Sunsuria Forum Mall", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Sunsuria Forum Residential Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sunway Artessa Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sunway Avila Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sunway Belfield", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Sunway Gandaria", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Tangerine Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Temasya 8", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Teratai", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Amarene", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Annexe @ Medan Connaught", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "The Apple Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Arcuz @ Kelana Jaya", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Birch", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Cove, Ipoh Garden East @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Cruise", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Forum", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "The Horizon @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Leafz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Linc", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "The Loft @ Penang", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Louvre @ Country Heights", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Maple Residences OUG", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Nest Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Olive", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Pano @ Jalan Ipoh", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Petalz Residences", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "The Quartz Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Rainz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Reach Titiwangsa", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Rosewoodz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Societe Desa Sri Hartamas", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "The Stallionz @ Ipoh", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Stone", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Valley", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Zen", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "The Zizz @ Damansara North", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Third Avenue Cyberjaya", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Timur Perdana Kampar @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Traders Garden", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Traders Park", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Traders Park Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Treetops Residency @ Perak", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Trellis Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Trifolia Apartment", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Tuan 2egacy Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Twin Arkz", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Twin Galaxy", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "UOA Business Park ", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Urban Suites Penang", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "VOS @ Jelutong", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Veranda Residences", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Vertex Tower @ CyberSquare", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Vertex Tower Retails @ CyberSquare", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "Vierra Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Vista Sungai Ramal", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Vista Tiara", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Vivo Executive Apartment", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Waltz Residence", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Wave @ Marina Cove", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Yolo Signature Suites", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Yolo Signature Suites Retails", street: "", city: "", zip: "", state: "", user: false, business: true },
  { name: "You City 3 @ Cheras", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Youth City Residence @ Vision City Nilai", street: "", city: "", zip: "", state: "", user: true, business: true },
  { name: "Zen 6", street: "", city: "", zip: "", state: "", user: true, business: false },
  { name: "Zentro", street: "", city: "", zip: "", state: "", user: true, business: false }
].map(location => {
  return {
    ...location,
    plans: location.name === "188 Suites" ? {
      RESIDENTIAL: [
        { label: "One Time Deal 300 Mbps", value: "otd_300", contracts: [{ value: 24, price: "2200" }] },
        { label: "One Time Deal 500 Mbps", value: "otd_500", contracts: [{ value: 24, price: "3000" }] },
        ...DEFAULT_PLANS.RESIDENTIAL
      ],
      BUSINESS: DEFAULT_PLANS.BUSINESS
    } : {
      RESIDENTIAL: location.user ? DEFAULT_PLANS.RESIDENTIAL : [],
      BUSINESS: location.business ? DEFAULT_PLANS.BUSINESS : []
    }
  };
});

interface Address {
  unit: string;
  street: string;
  street2: string;
  city: string;
  zip: string;
  state: string;
  country: string;
}

interface Plan {
  label: string;
  value: string;
  contracts: { value: number; price: string }[];
}

interface LocationData {
  name: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  user: boolean;
  business: boolean;
  plans: {
    RESIDENTIAL: Plan[];
    BUSINESS: Plan[];
  };
}

interface FormData {
  location: string;
  applicantType: string;
  plan: string;
  contract: number;
  contractPrice: string;
  address: Address;
  isTenant: boolean;
  installationDate: string;
  installationSession: string;
  nationality: string;
  name: string;
  nricPassport: string;
  email: string;
  mobile: string;
  secondaryMobile?: string;
  emergencyMobile?: string;
  dob?: string;
  contactPersonName?: string;
  companyRegNo?: string;
  tradeName?: string;
  financeContactName?: string;
  financeContactMobile?: string;
  financeContactEmail?: string;
  remarks?: string;
  promoCode?: string;
  telcoProvider?: string;
  agentCode?: string;
  termsAgreed: boolean;
  payMethod: string;
  files: File[];
  icFile?: File | null;
  ssmFile?: File | null;
  spaFile?: File | null;
  vpLetterFile?: File | null;
  tenancyAgreementFile?: File | null;
  authLetterFile?: File | null;
  ownerTenantFiles?: File[];
  additionalFile?: File | null;
  paymentSlipFile?: File | null;
  applicationFormFile?: File | null;
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onPrev?: () => void;
}

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    location: '',
    applicantType: 'RESIDENTIAL',
    plan: '',
    contract: 0,
    contractPrice: '',
    address: { unit: '', street: '', street2: '', city: '', zip: '', state: '', country: 'Malaysia' },
    isTenant: false,
    installationDate: '',
    installationSession: '',
    nationality: 'MALAYSIAN',
    name: '',
    nricPassport: '',
    email: '',
    mobile: '',
    secondaryMobile: '',
    emergencyMobile: '',
    dob: '',
    contactPersonName: '',
    companyRegNo: '',
    tradeName: '',
    financeContactName: '',
    financeContactMobile: '',
    financeContactEmail: '',
    remarks: '',
    promoCode: '',
    telcoProvider: '',
    agentCode: '',
    termsAgreed: false,
    payMethod: 'pay_later',
    files: [],
    icFile: null,
    ssmFile: null,
    spaFile: null,
    vpLetterFile: null,
    tenancyAgreementFile: null,
    authLetterFile: null,
    ownerTenantFiles: [],
    additionalFile: null,
    paymentSlipFile: null,
    applicationFormFile: null
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-center text-zinc-900 mb-12">Normal Subscription</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-16 px-4">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center relative">
                <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                  step > i + 1 ? 'bg-[#EF4444] border-[#EF4444]' : 
                  step === i + 1 ? 'bg-white border-[#EF4444]' : 'bg-[#E5E7EB] border-[#E5E7EB]'
                }`}>
                  {step > i + 1 && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`absolute -bottom-8 text-[10px] font-black tracking-widest uppercase whitespace-nowrap ${
                  step === i + 1 ? 'text-[#EF4444]' : 'text-zinc-400'
                }`}>
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 sm:w-24 h-1 mx-2 sm:mx-4 transition-all ${
                  step > i + 1 ? 'bg-[#EF4444]' : 'bg-[#E5E7EB]'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F9F8F3] rounded-3xl p-8 sm:p-12 shadow-sm border border-zinc-100">
          {step === 1 && (
            <Step1Plan formData={formData} setFormData={setFormData} onNext={nextStep} />
          )}
          {step === 2 && (
            <Step2Details formData={formData} setFormData={setFormData} onNext={nextStep} onPrev={prevStep} />
          )}
          {step === 3 && (
            <Step3Addons onNext={nextStep} onPrev={prevStep} />
          )}
          {step === 4 && (
            <Step4Preview formData={formData} onPrev={prevStep} />
          )}
        </div>
      </div>
    </div>
  );
}

function Step1Plan({ formData, setFormData, onNext }: StepProps) {
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const found = (LOCATIONS as LocationData[]).find(l => l.name === val);
    if (found) {
      setFormData({
        ...formData,
        location: val,
        address: {
          ...formData.address,
          street: found.street,
          city: found.city,
          zip: found.zip,
          state: found.state
        }
      });
    } else {
      setFormData({ ...formData, location: val });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Installation Location</label>
          <input 
            list="locations"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="Search location..."
            value={formData.location}
            onChange={handleLocationChange}
          />
          <datalist id="locations">
            {LOCATIONS.map(l => <option key={l.name} value={l.name} />)}
            <option value="Others (Fill manually)" />
          </datalist>
          <p className="mt-2 text-xs text-zinc-500 font-bold">
            Click <a href="#" className="text-[#EF4444]">Here</a> if you unable to find your Installation Location
          </p>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Please Confirm</label>
          <div className="flex gap-4">
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-sm tracking-widest transition-all ${
                formData.applicantType === 'RESIDENTIAL' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, applicantType: 'RESIDENTIAL'})}
            >
              RESIDENTIAL
            </button>
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-sm tracking-widest transition-all ${
                formData.applicantType === 'BUSINESS' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, applicantType: 'BUSINESS'})}
            >
              BUSINESS
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Choose Your Plan</label>
          <select 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold appearance-none text-zinc-900"
            value={formData.plan}
            onChange={(e) => setFormData({...formData, plan: e.target.value, contract: 0, contractPrice: ''})}
          >
            <option value="">--Select Internet Package--</option>
            {(() => {
              const locationData = (LOCATIONS as LocationData[]).find(l => l.name === formData.location);
              const plans = locationData 
                ? locationData.plans[formData.applicantType as 'RESIDENTIAL' | 'BUSINESS'] || []
                : DEFAULT_PLANS[formData.applicantType as 'RESIDENTIAL' | 'BUSINESS'];
              return plans.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ));
            })()}
          </select>
        </div>

        {formData.plan && (
          <div>
            <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Contract Period (Months)</label>
            <div className="flex flex-wrap gap-4">
              {(() => {
                const locationData = (LOCATIONS as LocationData[]).find(l => l.name === formData.location);
                const plans = locationData 
                  ? locationData.plans[formData.applicantType as 'RESIDENTIAL' | 'BUSINESS'] || []
                  : DEFAULT_PLANS[formData.applicantType as 'RESIDENTIAL' | 'BUSINESS'];
                const planData = plans.find(p => p.value === formData.plan);
                return planData?.contracts.map(c => (
                  <button
                    key={c.value}
                    onClick={() => setFormData({...formData, contract: c.value, contractPrice: c.price})}
                    className={`flex-1 min-w-[120px] p-4 rounded-xl border-2 transition-all text-center ${
                      formData.contract === c.value 
                        ? 'border-[#EF4444] bg-red-50 text-[#EF4444]' 
                        : 'border-zinc-200 bg-white text-zinc-400 hover:border-zinc-300'
                    }`}
                  >
                    <div className="text-lg font-black">{c.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">RM {c.price}.00</div>
                  </button>
                ));
              })()}
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-[10px] font-bold text-zinc-400 italic">* All prices shown are inclusive of 6% SST.</p>
              <div className="flex gap-2 items-start">
                <span className="text-[#EF4444] text-[10px] font-black">⚠️</span>
                <p className="text-[10px] font-bold text-zinc-400 italic leading-tight">A Deposit and/or Installation Charge is applicable for Malaysian & Non-Malaysian</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Address</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 mb-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300" 
            placeholder="Unit No."
            value={formData.address.unit}
            onChange={(e) => setFormData({...formData, address: {...formData.address, unit: e.target.value}})}
          />
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 mb-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300" 
            placeholder="Street" 
            value={formData.address.street}
            onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300" 
              placeholder="City" 
              value={formData.address.city}
              onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})}
            />
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300" 
              placeholder="Zip" 
              value={formData.address.zip}
              onChange={(e) => setFormData({...formData, address: {...formData.address, zip: e.target.value}})}
            />
          </div>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 mb-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300" 
            placeholder="State" 
            value={formData.address.state}
            onChange={(e) => setFormData({...formData, address: {...formData.address, state: e.target.value}})}
          />
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 font-bold text-zinc-900 placeholder:text-zinc-300 focus:border-[#EF4444] outline-none transition-all" 
            placeholder="Country" 
            value={formData.address.country}
            onChange={(e) => setFormData({...formData, address: {...formData.address, country: e.target.value}})}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Preferred Installation</label>
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="date" 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
              value={formData.installationDate}
              onChange={(e) => setFormData({...formData, installationDate: e.target.value})}
            />
            <select 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
              value={formData.installationSession}
              onChange={(e) => setFormData({...formData, installationSession: e.target.value})}
            >
              <option value="">Session</option>
              <option value="morning">Morning (9AM-1PM)</option>
              <option value="afternoon">Afternoon (2PM-6PM)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center mt-8">
        <button 
          onClick={onNext}
          disabled={!formData.location || !formData.plan || formData.contract === undefined || !formData.installationDate || !formData.installationSession}
          className={`px-20 py-4 rounded-xl font-black text-lg tracking-widest shadow-xl transition-all ${
            formData.location && formData.plan && (formData.contract !== undefined) && formData.installationDate && formData.installationSession
              ? 'bg-[#EF4444] text-white hover:bg-red-600 hover:scale-[1.02]' 
              : 'bg-zinc-200 text-zinc-400 cursor-not-allowed opacity-50'
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

function Step2Details({ formData, setFormData, onNext, onPrev }: StepProps) {
  const TELCO_PROVIDERS = [
    { label: "Celcom", value: "8" },
    { label: "cw", value: "10" },
    { label: "Digi", value: "5" },
    { label: "Eight", value: "12" },
    { label: "hi", value: "14" },
    { label: "Hotlink", value: "4" },
    { label: "Maxis", value: "1" },
    { label: "M one", value: "18" },
    { label: "Redone Mobile", value: "9" },
    { label: "Simba", value: "13" },
    { label: "Singtel", value: "11" },
    { label: "sparx", value: "19" },
    { label: "Time", value: "3" },
    { label: "Tune Talk", value: "6" },
    { label: "UMobile", value: "7" },
    { label: "Unifi", value: "2" },
    { label: "xo", value: "17" },
    { label: "XOX Mobile", value: "15" },
    { label: "yes", value: "16" }
  ];

  const handleFileChange = (field: keyof FormData, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.multiple) {
        const newFiles = Array.from(e.target.files);
        setFormData(prev => ({
          ...prev,
          [field]: [...(prev[field] as File[] || []), ...newFiles]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [field]: e.target.files![0]
        }));
      }
    }
  };

  const isStep2Valid = 
    formData.name.trim() !== '' && 
    formData.nricPassport.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.mobile.trim() !== '' && 
    formData.termsAgreed;

  return (
    <div className="space-y-12">
      <h3 className="text-2xl font-black text-center text-zinc-900 uppercase tracking-widest">Fill In Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Nationality */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Nationality</label>
          <div className="flex gap-4">
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-300'
              }`}
              onClick={() => setFormData({...formData, nationality: 'MALAYSIAN'})}
            >
              MALAYSIAN
            </button>
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'NON-MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-300'
              }`}
              onClick={() => setFormData({...formData, nationality: 'NON-MALAYSIAN'})}
            >
              NON-MALAYSIAN
            </button>
          </div>
          {formData.nationality === 'NON-MALAYSIAN' && (
            <p className="text-xs font-bold text-[#EF4444] mt-2 italic">* Your package will charge a deposit of RM150.00</p>
          )}
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">
            {formData.applicantType === 'BUSINESS' ? 'Account Name' : 'Name'}
          </label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* IC / Passport */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">
            {formData.nationality === 'MALAYSIAN' ? 'NRIC' : 'Passport No.'}
          </label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder={formData.nationality === 'MALAYSIAN' ? 'Eg: 880101109999' : 'Passport No.'}
            maxLength={formData.nationality === 'MALAYSIAN' ? 12 : undefined}
            value={formData.nricPassport}
            onChange={(e) => setFormData({...formData, nricPassport: e.target.value})}
          />
        </div>

        {/* Contact Person Name (Only for Business) */}
        {formData.applicantType === 'BUSINESS' && (
          <div className="space-y-2">
            <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Contact Person Name</label>
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
              value={formData.contactPersonName}
              onChange={(e) => setFormData({...formData, contactPersonName: e.target.value})}
            />
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">
            {formData.applicantType === 'BUSINESS' ? 'Contact Email' : 'Email'}
          </label>
          <input 
            type="email"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Date of Birth (Optional or based on logic) */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Date of Birth</label>
          <input 
            type="date"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
            value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
          />
        </div>

        {/* Primary Contact */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">
            {formData.applicantType === 'BUSINESS' ? 'Contact Mobile No.' : 'Primary Contact'}
          </label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="01XXXXXXXX"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
        </div>

        {/* Secondary Contact */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Secondary Contact (Optional)</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="01XXXXXXXX"
            value={formData.secondaryMobile}
            onChange={(e) => setFormData({...formData, secondaryMobile: e.target.value})}
          />
        </div>

        {/* Emergency Contact */}
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Emergency Contact (Optional)</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="01XXXXXXXX"
            value={formData.emergencyMobile}
            onChange={(e) => setFormData({...formData, emergencyMobile: e.target.value})}
          />
        </div>
      </div>

      {/* Company Details (Only for Business) */}
      {formData.applicantType === 'BUSINESS' && (
        <div className="pt-8 border-t-2 border-zinc-100">
          <h4 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-8 text-center">Company Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Company Registration No.</label>
              <input 
                className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
                value={formData.companyRegNo}
                onChange={(e) => setFormData({...formData, companyRegNo: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Trade Name</label>
              <input 
                className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
                value={formData.tradeName}
                onChange={(e) => setFormData({...formData, tradeName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">2nd Finance Contact Name (Optional)</label>
              <input 
                className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
                value={formData.financeContactName}
                onChange={(e) => setFormData({...formData, financeContactName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">2nd Finance Contact Mobile No (Optional)</label>
              <input 
                className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
                placeholder="01XXXXXXXX"
                value={formData.financeContactMobile}
                onChange={(e) => setFormData({...formData, financeContactMobile: e.target.value})}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">2nd Finance Contact Email (Optional)</label>
              <input 
                className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
                placeholder="example@mail.com"
                value={formData.financeContactEmail}
                onChange={(e) => setFormData({...formData, financeContactEmail: e.target.value})}
              />
            </div>
          </div>
        </div>
      )}

      {/* Other Details */}
      <div className="pt-8 border-t-2 border-zinc-100">
        <h4 className="text-xl font-black text-zinc-900 uppercase tracking-widest mb-8 text-center">Other Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Remarks (Optional)</label>
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
              value={formData.remarks}
              onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Promo Code (Optional)</label>
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
              value={formData.promoCode}
              onChange={(e) => setFormData({...formData, promoCode: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest">Which Telco Switching From</label>
            <select 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 appearance-none"
              value={formData.telcoProvider}
              onChange={(e) => setFormData({...formData, telcoProvider: e.target.value})}
            >
              <option value="">--- Select a Telco ---</option>
              {TELCO_PROVIDERS.map(telco => (
                <option key={telco.value} value={telco.value}>{telco.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Attachments */}
      <div className="pt-8 border-t-2 border-zinc-100 space-y-8">
        <h4 className="text-xl font-black text-zinc-900 uppercase tracking-widest text-center">Attachments</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUploadField 
            label={formData.nationality === 'MALAYSIAN' ? "Scanned IC Copy" : "Passport Copy"}
            file={formData.icFile}
            onChange={(e) => handleFileChange('icFile', e)}
          />

          {formData.applicantType === 'BUSINESS' && (
            <FileUploadField 
              label="SSM Documents"
              file={formData.ssmFile}
              onChange={(e) => handleFileChange('ssmFile', e)}
            />
          )}

          

          {formData.isTenant && (
            <>
              <FileUploadField 
                label="S&P 1st pg / VP Letter / Utility Bill"
                file={formData.vpLetterFile}
                onChange={(e) => handleFileChange('vpLetterFile', e)}
              />
              <FileUploadField 
                label="Tenancy Agreement"
                file={formData.tenancyAgreementFile}
                onChange={(e) => handleFileChange('tenancyAgreementFile', e)}
              />
              <FileUploadField 
                label="Letter of Authorization"
                file={formData.authLetterFile}
                onChange={(e) => handleFileChange('authLetterFile', e)}
              />
              <FileUploadField 
                label="Yours and Owner's IC/Passport Copy"
                files={formData.ownerTenantFiles}
                multiple
                onChange={(e) => handleFileChange('ownerTenantFiles', e)}
              />
            </>
          )}

          <FileUploadField 
            label="Additional Document (Optional)"
            file={formData.additionalFile}
            onChange={(e) => handleFileChange('additionalFile', e)}
          />

          <FileUploadField 
            label="Payment Slip (Optional)"
            file={formData.paymentSlipFile}
            onChange={(e) => handleFileChange('paymentSlipFile', e)}
          />

          <FileUploadField 
            label="Agent Code (Optional)"
            isInput
            value={formData.agentCode}
            onChangeInput={(val) => setFormData({...formData, agentCode: val})}
          />

          <FileUploadField 
            label="Application Form"
            file={formData.applicationFormFile}
            onChange={(e) => handleFileChange('applicationFormFile', e)}
          />
        </div>
      </div>

      {/* Terms and Navigation */}
      <div className="pt-12 space-y-8">
        <div className="flex items-center justify-center gap-4">
          <input 
            type="checkbox" 
            id="terms"
            className="w-6 h-6 rounded accent-[#EF4444] cursor-pointer"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({...formData, termsAgreed: e.target.checked})}
          />
          <label htmlFor="terms" className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer">
            I read and agree with the <a href="https://freshtel.my/web/content/652099?download=true" target="_blank" className="text-[#EF4444] underline">Terms & Conditions</a> as required by Freshtel.
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onPrev}
            className="flex-1 py-5 rounded-2xl font-black text-sm tracking-[0.2em] transition-all bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-900 hover:text-zinc-900"
          >
            PREV
          </button>
          <button 
            onClick={onNext}
            disabled={!isStep2Valid}
            className={`flex-1 py-5 rounded-2xl font-black text-sm tracking-[0.2em] transition-all ${
              isStep2Valid 
                ? 'bg-[#EF4444] text-white shadow-xl hover:bg-zinc-900' 
                : 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
            }`}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

interface FileUploadFieldProps {
  label: string;
  file?: File | null;
  files?: File[];
  multiple?: boolean;
  isInput?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInput?: (val: string) => void;
}

function FileUploadField({ label, file, files, multiple, isInput, value, onChange, onChangeInput }: FileUploadFieldProps) {
  if (isInput) {
    return (
      <div className="space-y-2">
        <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest">{label}</label>
        <input 
          className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
          value={value}
          onChange={(e) => onChangeInput?.(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest">{label}</label>
      <div className="relative group">
        <input 
          type="file" 
          multiple={multiple}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={onChange}
          accept="application/pdf,image/jpg,image/jpeg,image/png"
        />
        <div className="bg-white border-2 border-zinc-200 rounded-xl p-4 flex items-center gap-4 group-hover:border-zinc-300 transition-all">
          <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#EF4444] transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-zinc-900 truncate">
              {multiple 
                ? (files?.length ? `${files.length} files selected` : "Add Attachments")
                : (file ? file.name : "Select File")
              }
            </p>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
              {multiple ? "* Allow multiple files" : "* Support a single file only"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3Addons({ onNext, onPrev }: Pick<StepProps, 'onNext' | 'onPrev'>) {
  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase tracking-tightest">Enhance Your Experience</h3>
      <p className="text-zinc-500 font-bold mb-12">Available Add-ons for your subscription</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl border-2 border-zinc-100 shadow-sm relative overflow-hidden group hover:border-[#EF4444] transition-all">
          <div className="absolute top-0 right-0 bg-[#EF4444] text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all">Popular</div>
          <h4 className="text-lg font-black mb-2 text-zinc-900">Voice Plan</h4>
          <p className="text-sm text-zinc-400 font-bold mb-6">Stay connected with crystal clear voice</p>
          <div className="text-2xl font-black text-[#EF4444] mb-8">From RM10/mo</div>
          <button className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-400 font-black hover:bg-[#EF4444] hover:text-white transition-all">SELECT</button>
        </div>

        <div className="bg-white p-8 rounded-2xl border-2 border-zinc-100 shadow-sm relative overflow-hidden group hover:border-[#EF4444] transition-all opacity-80">
          <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
             <span className="bg-zinc-900 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl">Coming Soon</span>
          </div>
          <h4 className="text-lg font-black mb-2 text-zinc-900">Mesh Router</h4>
          <p className="text-sm text-zinc-400 font-bold mb-6">Experience dead-zone free WiFi 6</p>
          <div className="text-black font-black mb-8 opacity-0">...</div>
          <button className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-400 font-black disabled:cursor-not-allowed cursor-default">SELECT</button>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all text-xs tracking-widest uppercase">PREV</button>
        <button onClick={onNext} className="flex-1 max-w-[200px] bg-[#EF4444] text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-all text-xs tracking-widest uppercase">NEXT</button>
      </div>
    </div>
  );
}

function Step4Preview({ formData, onPrev }: Pick<StepProps, 'formData' | 'onPrev'>) {
  const contractPeriod = formData.contract === 0 ? 'No Contract' : `${formData.contract} Months`;
  const monthlyFee = formData.contractPrice || '0.00';

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
          Your Subscription Fee is{' '}
          <span className="text-[#00a1e1]">RM {monthlyFee}</span> / Month
        </h2>
        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest italic">*Subject to 6% SST</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y-2 border-zinc-200 py-12">
        <div className="space-y-6">
          <Section title="Installation Location" value={formData.location || '-'} />
          <Section title="Address" value={`${formData.address.unit || '-'}, FreshTel Building`} />
          <Section title="Preferred Date" value={formData.installationDate || '-'} />
        </div>
        <div className="space-y-6">
          <Section title="Plan Selected" value={formData.plan ? formData.plan.toUpperCase().replace('_', ' ') : '-'} />
          <Section title="Contract Period" value={contractPeriod} />
          <Section title="Applicant Type" value={formData.applicantType} />
          <Section title="NRIC / Passport" value={formData.nricPassport || '-'} />
          <Section title="Email" value={formData.email || '-'} />
          <Section title="Primary Contact" value={formData.mobile || '-'} />
          <div>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Identity Proof & Documents</p>
            <div className="flex flex-wrap gap-2">
              {[formData.icFile, formData.ssmFile, formData.spaFile, formData.vpLetterFile, formData.tenancyAgreementFile, formData.authLetterFile, ...(formData.ownerTenantFiles || []), formData.additionalFile, formData.paymentSlipFile, formData.applicationFormFile].filter(Boolean).map((file, i) => (
                <span key={i} className="text-xs font-bold text-[#EF4444] bg-white border border-zinc-100 px-3 py-1.5 rounded-lg shadow-sm">{file!.name}</span>
              ))}
              {formData.files.map((file, i) => (
                <span key={`old-${i}`} className="text-xs font-bold text-[#EF4444] bg-white border border-zinc-100 px-3 py-1.5 rounded-lg shadow-sm">{file.name}</span>
              ))}
              {!formData.icFile && !formData.files.length && (
                <p className="text-lg font-black text-zinc-900 leading-tight">-</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tightest flex items-center gap-4">
           <span className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs leading-none">🏁</span>
           Order Summary
        </h3>
        
        <div className="bg-white rounded-2xl p-8 border-2 border-zinc-100 shadow-sm">
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
             <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">Monthly Fee</span>
             <span className="font-black text-zinc-900">RM {monthlyFee}</span>
           </div>
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
             <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">SST (6%)</span>
             <span className="font-black text-zinc-900">RM {(parseFloat(monthlyFee) * 0.06).toFixed(2)}</span>
           </div>
           <div className="flex justify-between items-center pt-4">
             <span className="font-black text-zinc-900 text-lg uppercase tracking-widest">Total</span>
             <span className="font-black text-[#EF4444] text-3xl">RM {(parseFloat(monthlyFee) * 1.06).toFixed(2)}</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* Placeholder for reCAPTCHA */}
        <div className="w-full max-w-[300px] h-[78px] bg-white border-2 border-zinc-200 flex items-center justify-center rounded-lg shadow-sm">
          <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">reCAPTCHA Challenge</span>
        </div>

        <div className="flex gap-4 w-full justify-center">
          <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all text-xs tracking-widest">PREV</button>
          <button className="flex-1 max-w-[300px] bg-zinc-900 text-white py-4 rounded-xl font-black shadow-xl hover:scale-[1.02] transition-all text-xs tracking-widest">PROCEED TO COMPLETE</button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, value }: { title: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-lg font-black text-zinc-900 leading-tight">{value}</p>
    </div>
  );
}

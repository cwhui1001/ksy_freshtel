'use client';

import { useState } from 'react';

const STEPS = ['PLAN', 'DETAIL', 'ADD-ON'];

interface Plan {
  label: string;
  value: string;
  contracts: { value: number; price: string; label?: string }[];
}

const DEFAULT_PLANS: { RESIDENTIAL: Plan[] } = {
  RESIDENTIAL: [
    { label: "PC 100 Mbps", value: "pc_100", contracts: [{ value: 0, price: "99", label: "No Contract" }, { value: 12, price: "79" }, { value: 24, price: "69" }] },
    { label: "PC 300 Mbps", value: "pc_300", contracts: [{ value: 12, price: "119" }, { value: 24, price: "99" }, { value: 30, price: "99", label: "24+6" }] },
    { label: "PC 500 Mbps", value: "pc_500", contracts: [{ value: 12, price: "149" }, { value: 24, price: "129" }] },
    { label: "PC 1 Gbps", value: "pc_1g", contracts: [{ value: 12, price: "199" }, { value: 24, price: "179" }] },
    { label: "PC 1.68 Gbps", value: "pc_168g", contracts: [{ value: 12, price: "289" }, { value: 24, price: "269" }] },
    { label: "PC 2 Gbps", value: "pc_2g", contracts: [{ value: 12, price: "379" }, { value: 24, price: "359" }] }
  ]
};

const WINBACK_PLANS: { RESIDENTIAL: Plan[] } = {
  RESIDENTIAL: [
    { label: "Winback 300 Mbps", value: "wb_300", contracts: [{ value: 36, price: "44.50" }] },
    { label: "Winback 500 Mbps", value: "wb_500", contracts: [{ value: 36, price: "54.50" }] },
    { label: "Winback 1 Gbps", value: "wb_1g", contracts: [{ value: 36, price: "79.50" }] }
  ]
};

const LOCATIONS = [
  { name: "168 Park Selayang", street: "Jalan Kuching", city: "Batu Caves", zip: "68100", state: "Selangor", user: true },
  { name: "188 Suites", street: "Jalan Sultan Ismail, City Centre", city: "Kuala Lumpur", zip: "50250", state: "Wilayah Persekutuan Kuala Lumpur", user: true },
  { name: "1Medini Condominium", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: true },
  { name: "1Medini Condominium Retails", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: false },
  { name: "22 Macalisterz", street: "", city: "", zip: "", state: "", user: true },
  { name: "8scape Residensi", street: "", city: "", zip: "", state: "", user: true },
  { name: "99 Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "ANYA Shorea Park Residence 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "ARC Austin Hill @ Johor", street: "", city: "", zip: "", state: "", user: true },
  { name: "Admiral Residences @ Kota Laksamana", street: "", city: "", zip: "", state: "", user: true },
  { name: "Aera Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Alanis Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Alinea Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Almyra Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Alstonia Residence Sungai Long", street: "", city: "", zip: "", state: "", user: true },
  { name: "Amber Cove Premier Suites Melaka", street: "", city: "", zip: "", state: "", user: true },
  { name: "Amberside", street: "", city: "", zip: "", state: "", user: true },
  { name: "Anderson Residences @ Ipoh", street: "", city: "", zip: "", state: "", user: true },
  { name: "Anggerik Wira", street: "", city: "", zip: "", state: "", user: true },
  { name: "Anggun Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Apex Tower @ CyberSquare", street: "", city: "", zip: "", state: "", user: true },
  { name: "Apex Tower Retails @ CyberSquare", street: "", city: "", zip: "", state: "", user: false },
  { name: "Aradia Residence @ Lake City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Aradia Residence Commercial @ Lake City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Arena Residence 1", street: "", city: "", zip: "", state: "", user: true },
  { name: "Arena Residence 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Aster Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Astoria Ampang", street: "", city: "", zip: "", state: "", user: true },
  { name: "Atlantis Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bangsar Hill Park Condominium (D, E)", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bay Laurel @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bay Point @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bayu Angkasa", street: "", city: "", zip: "", state: "", user: true },
  { name: "Beletime @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bell Avenue", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bell Suite", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bennington", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bercham 138 @ Apartment Bakti Putra", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bercham Prima Ipoh Kiara @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Bora Residence @ Tropicana Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Botanika @ Tebrau Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Brezza One Residency", street: "", city: "", zip: "", state: "", user: true },
  { name: "Brezza One Residency Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "Cantara Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Centroz", street: "", city: "", zip: "", state: "", user: true },
  { name: "Cerrado @ Southville City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Ceylonz Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Chambers Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Citizen 2 @ Old Klang Road", street: "", city: "", zip: "", state: "", user: true },
  { name: "Clio Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Cloud Tree", street: "", city: "", zip: "", state: "", user: true },
  { name: "Colony @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true },
  { name: "Colony Retail @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true },
  { name: "Conezion", street: "", city: "", zip: "", state: "", user: true },
  { name: "Crystal Creek Resort", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Clover Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Cosmos Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Erica Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Festivo Residence @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Ivo Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Nuri Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Quince Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Rapport", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Ruby @ Puchong", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Terra Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Vervain Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "D'Vine Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Damai 88", street: "", city: "", zip: "", state: "", user: true },
  { name: "Eaton Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Edusphere Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Emira Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block A_Halo", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block B_Sunday", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block C_Colonial Loft", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block D_My Loft", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block E_5-Star Marriot International Hotel", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block E_Serviced Office Suites", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_Block F_5-Star Autograph International Boutique Hotel", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block G", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_Block H_Hextar Tower", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_Block J_Victoria Suite", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_Block L", street: "", city: "", zip: "", state: "", user: true },
  { name: "Empire City_Block M_Soho", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_Block N_MyEG", street: "", city: "", zip: "", state: "", user: false },
  { name: "Empire City_CGV Hotel", street: "", city: "", zip: "", state: "", user: true },
  { name: "Expressionz Professional Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Ataraxia Park 1", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Ataraxia Park 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Ataraxia Park 3", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Ataraxia Park 3 @ Retail", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Ataraxia Park 4", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Cerulean Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Regalia Park", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Starview Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Forest City Starview Bay @ Retails", street: "", city: "", zip: "", state: "", user: true },
  { name: "Gaya Resort Homes", street: "", city: "", zip: "", state: "", user: true },
  { name: "Giverny Walk", street: "", city: "", zip: "", state: "", user: true },
  { name: "Glisten Hill Condominium @ Juru", street: "", city: "", zip: "", state: "", user: true },
  { name: "Gurneymas Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "HCK Tower Damansara @ Empire City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Helix2 (Residensi Heliks)", street: "", city: "", zip: "", state: "", user: true },
  { name: "Ho Hup Tower @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "IFS Seri Iskandar", street: "", city: "", zip: "", state: "", user: true },
  { name: "IOI Rio", street: "", city: "", zip: "", state: "", user: true },
  { name: "Icon City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Idaman Abadi", street: "", city: "", zip: "", state: "", user: true },
  { name: "Idaman Abadi 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Ipoh Convention Centre (ICC)", street: "", city: "", zip: "", state: "", user: true },
  { name: "Isola KLCC", street: "", city: "", zip: "", state: "", user: true },
  { name: "Jasper Square", street: "", city: "", zip: "", state: "", user: true },
  { name: "KOTA PUTERI, BATU ARANG", street: "", city: "", zip: "", state: "", user: true },
  { name: "KSL Residences 2 @ Kangkar Tebrau", street: "", city: "", zip: "", state: "", user: true },
  { name: "KSL Residences @ Daya", street: "", city: "", zip: "", state: "", user: true },
  { name: "Kampus West City Condominium", street: "", city: "", zip: "", state: "", user: true },
  { name: "Ken Rimba", street: "", city: "", zip: "", state: "", user: true },
  { name: "Kensho Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Kenwingston Platz Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Kenwingston Skyloft", street: "", city: "", zip: "", state: "", user: true },
  { name: "KepongMas", street: "", city: "", zip: "", state: "", user: true },
  { name: "Kings Bay @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "LEA By The Hills", street: "", city: "", zip: "", state: "", user: true },
  { name: "LSH 33", street: "", city: "", zip: "", state: "", user: true },
  { name: "LSH 33 Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "La Thea Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "LakeFront Residence @ Cyberjaya", street: "", city: "", zip: "", state: "", user: true },
  { name: "Laman Damai @ Country Garden Central Park P6", street: "", city: "", zip: "", state: "", user: true },
  { name: "Laman Glasier @ Country Garden Central Park P2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Laman Harmoni @ Country Garden Central Park P5", street: "", city: "", zip: "", state: "", user: true },
  { name: "Legend Heights @ Sri Segambut", street: "", city: "", zip: "", state: "", user: true },
  { name: "Lily Apartment @ Kuchai Lama", street: "", city: "", zip: "", state: "", user: true },
  { name: "Lovell @ Country Garden Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Luxe @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true },
  { name: "Luxe Retail @ Wisma Infinitum", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Adora", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Arisa Sentul", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Centura", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Oscar", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Suite @ Menjalara", street: "", city: "", zip: "", state: "", user: true },
  { name: "M Vertica", street: "", city: "", zip: "", state: "", user: true },
  { name: "M101 Dang Wangi", street: "", city: "", zip: "", state: "", user: true },
  { name: "MH Unilodge", street: "", city: "", zip: "", state: "", user: true },
  { name: "MIRAI Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Majestic Maxim", street: "", city: "", zip: "", state: "", user: true },
  { name: "Majestic Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Maple Residences ", street: "", city: "", zip: "", state: "", user: true },
  { name: "Marbella", street: "", city: "", zip: "", state: "", user: true },
  { name: "Meldrum Height Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Menara HLA", street: "", city: "", zip: "", state: "", user: true },
  { name: "Menara Sunsuria", street: "", city: "", zip: "", state: "", user: false },
  { name: "Meridin Medini @ Ramada", street: "", city: "", zip: "", state: "", user: true },
  { name: "Meru Prima @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mesahill Phrase 1 - Tower A", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mesahill Phrase 2 - Tower B", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mesahill Phrase 3 - Tower C, D, E", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mesahill Phrase 4 - Premier 1 & 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mesamall", street: "", city: "", zip: "", state: "", user: false },
  { name: "Metro Cheras", street: "", city: "", zip: "", state: "", user: true },
  { name: "Metro Kepong", street: "", city: "", zip: "", state: "", user: true },
  { name: "Millerz Square A, B", street: "", city: "", zip: "", state: "", user: true },
  { name: "Millerz Square Retail", street: "", city: "", zip: "", state: "", user: false },
  { name: "Millerz Square Tower C", street: "", city: "", zip: "", state: "", user: true },
  { name: "Millerz Square Tower D", street: "", city: "", zip: "", state: "", user: true },
  { name: "Millerz Square Tower E", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mira @ Shorea Park", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mizumi", street: "", city: "", zip: "", state: "", user: true },
  { name: "Monet Garden", street: "", city: "", zip: "", state: "", user: true },
  { name: "Monet Lily", street: "", city: "", zip: "", state: "", user: true },
  { name: "Monet Springtime", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mossaz", street: "", city: "", zip: "", state: "", user: true },
  { name: "Mutiara Melaka Beach Resort", street: "", city: "", zip: "", state: "", user: true },
  { name: "Nadayu 801 Subang Murni Apartment", street: "", city: "", zip: "", state: "", user: true },
  { name: "Nadayu 801 Subang Murni Apartment @ Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "Nest 2 Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Netizen", street: "", city: "", zip: "", state: "", user: true },
  { name: "Nidoz", street: "", city: "", zip: "", state: "", user: true },
  { name: "Nigella Park @ Forest City", street: "", city: "", zip: "", state: "", user: true },
  { name: "Noa Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Nouvelle Meru", street: "", city: "", zip: "", state: "", user: true },
  { name: "Novo 8 Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Octagon Ipoh @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "One 49 Resident", street: "", city: "", zip: "", state: "", user: true },
  { name: "One Cochrane Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "One Maxim", street: "", city: "", zip: "", state: "", user: true },
  { name: "Ooak Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Optimus Medini", street: "", city: "", zip: "", state: "", user: true },
  { name: "Opus Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "PJ Midtown Residential", street: "", city: "", zip: "", state: "", user: true },
  { name: "PJ Midtown Residential Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "PPAM Dalur", street: "", city: "", zip: "", state: "", user: true },
  { name: "PPAM Setapak Riviera", street: "", city: "", zip: "", state: "", user: true },
  { name: "Palazzo Ipoh Garden East", street: "", city: "", zip: "", state: "", user: true },
  { name: "Palm Hill Residence 1", street: "", city: "", zip: "", state: "", user: true },
  { name: "Palm Hill Residence 3", street: "", city: "", zip: "", state: "", user: true },
  { name: "Palmyra", street: "", city: "", zip: "", state: "", user: true },
  { name: "Pangsapuri Opal", street: "", city: "", zip: "", state: "", user: true },
  { name: "Pangsapuri Selangorku @ Amansiara", street: "", city: "", zip: "", state: "", user: true },
  { name: "Pangsapuri Seri Iskandar @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Paradigm Residence @ Johor", street: "", city: "", zip: "", state: "", user: true },
  { name: "Pavilion", street: "", city: "", zip: "", state: "", user: true },
  { name: "Paxtonz", street: "", city: "", zip: "", state: "", user: true },
  { name: "Piccadilly Service Residence @ Greentown", street: "", city: "", zip: "", state: "", user: true },
  { name: "Pinnacle Sri Petaling", street: "", city: "", zip: "", state: "", user: true },
  { name: "Prima Falim @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Prima Kepayang", street: "", city: "", zip: "", state: "", user: true },
  { name: "Putra One Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "R&F Princess Cove 1", street: "", city: "", zip: "", state: "", user: true },
  { name: "R&F Princess Cove 1 Retails", street: "", city: "", zip: "", state: "", user: true },
  { name: "R&F Princess Cove 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "R&F Princess Cove 2 Retails", street: "", city: "", zip: "", state: "", user: true },
  { name: "Reizz Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Res280 Condominium", street: "", city: "", zip: "", state: "", user: true },
  { name: "Res280 Condominium Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "Residence Seri Serindit", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Adelia", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Adelia 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Adelia 3", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Adelia 4", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Agile Delima", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Alamanda", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Aman Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Jalilmas", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Lili", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi M Luna", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Maarof", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Mutiara", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Nexus Kajang", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Selangorku Begonia", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Skyluxe", street: "", city: "", zip: "", state: "", user: true },
  { name: "Residensi Sutera 7", street: "", city: "", zip: "", state: "", user: true },
  { name: "Retail @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "Rev.O @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "Riveria City KL Sentral", street: "", city: "", zip: "", state: "", user: true },
  { name: "Royal Strand Country Garden @ Danga Bay", street: "", city: "", zip: "", state: "", user: true },
  { name: "Rubica", street: "", city: "", zip: "", state: "", user: true },
  { name: "Savanna Executive Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Scarletz Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Seni Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sensory Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sentral Suites KL Sentral", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sentul Point Suite", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sentul Point Suite Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "Seri Topaz Puchong", street: "", city: "", zip: "", state: "", user: true },
  { name: "Seruni", street: "", city: "", zip: "", state: "", user: true },
  { name: "Setia Sky 88", street: "", city: "", zip: "", state: "", user: true },
  { name: "Shang Height Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sierra 16", street: "", city: "", zip: "", state: "", user: true },
  { name: "Silk Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sky Awani 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sky Awani 3", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sky Condominium", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sky Meridien", street: "", city: "", zip: "", state: "", user: true },
  { name: "SkyBlox @ SkySanctuary", street: "", city: "", zip: "", state: "", user: true },
  { name: "Skypark@Cyberjaya", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sovo @ Aurora Place Bukit Jalil", street: "", city: "", zip: "", state: "", user: true },
  { name: "Space Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sri Carcosa", street: "", city: "", zip: "", state: "", user: true },
  { name: "Stellar Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "SummerSkye Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunsuria Forum - Soho 2", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunsuria Forum Mall", street: "", city: "", zip: "", state: "", user: false },
  { name: "Sunsuria Forum Residential Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunway Artessa Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunway Avila Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunway Belfield", street: "", city: "", zip: "", state: "", user: true },
  { name: "Sunway Gandaria", street: "", city: "", zip: "", state: "", user: true },
  { name: "Tangerine Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Temasya 8", street: "", city: "", zip: "", state: "", user: true },
  { name: "Teratai", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Amarene", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Annexe @ Medan Connaught", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Apple Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Arcuz @ Kelana Jaya", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Birch", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Cove, Ipoh Garden East @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Cruise", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Forum", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Horizon @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Leafz", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Linc", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Loft @ Penang", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Louvre @ Country Heights", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Maple Residences OUG", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Nest Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Olive", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Pano @ Jalan Ipoh", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Petalz Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Quartz Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Rainz", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Reach Titiwangsa", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Rosewoodz", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Societe Desa Sri Hartamas", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Stallionz @ Ipoh", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Stone", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Valley", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Zen", street: "", city: "", zip: "", state: "", user: true },
  { name: "The Zizz @ Damansara North", street: "", city: "", zip: "", state: "", user: true },
  { name: "Third Avenue Cyberjaya", street: "", city: "", zip: "", state: "", user: true },
  { name: "Timur Perdana Kampar @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Traders Garden", street: "", city: "", zip: "", state: "", user: true },
  { name: "Traders Park", street: "", city: "", zip: "", state: "", user: true },
  { name: "Traders Park Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "Treetops Residency @ Perak", street: "", city: "", zip: "", state: "", user: true },
  { name: "Trellis Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Trifolia Apartment", street: "", city: "", zip: "", state: "", user: true },
  { name: "Tuan 2egacy Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Twin Arkz", street: "", city: "", zip: "", state: "", user: true },
  { name: "Twin Galaxy", street: "", city: "", zip: "", state: "", user: true },
  { name: "UOA Business Park ", street: "", city: "", zip: "", state: "", user: true },
  { name: "Urban Suites Penang", street: "", city: "", zip: "", state: "", user: true },
  { name: "VOS @ Jelutong", street: "", city: "", zip: "", state: "", user: true },
  { name: "Veranda Residences", street: "", city: "", zip: "", state: "", user: true },
  { name: "Vertex Tower @ CyberSquare", street: "", city: "", zip: "", state: "", user: true },
  { name: "Vertex Tower Retails @ CyberSquare", street: "", city: "", zip: "", state: "", user: false },
  { name: "Vierra Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Vista Sungai Ramal", street: "", city: "", zip: "", state: "", user: true },
  { name: "Vista Tiara", street: "", city: "", zip: "", state: "", user: true },
  { name: "Vivo Executive Apartment", street: "", city: "", zip: "", state: "", user: true },
  { name: "Waltz Residence", street: "", city: "", zip: "", state: "", user: true },
  { name: "Wave @ Marina Cove", street: "", city: "", zip: "", state: "", user: true },
  { name: "Yolo Signature Suites", street: "", city: "", zip: "", state: "", user: true },
  { name: "Yolo Signature Suites Retails", street: "", city: "", zip: "", state: "", user: false },
  { name: "You City 3 @ Cheras", street: "", city: "", zip: "", state: "", user: true },
  { name: "Youth City Residence @ Vision City Nilai", street: "", city: "", zip: "", state: "", user: true },
  { name: "Zen 6", street: "", city: "", zip: "", state: "", user: true },
  { name: "Zentro", street: "", city: "", zip: "", state: "", user: true }
].map(location => {
  return {
    ...location,
    plans: location.name === "188 Suites" ? {
      RESIDENTIAL: [
        { label: "One Time Deal 300 Mbps", value: "otd_300", contracts: [{ value: 24, price: "2200" }] },
        { label: "One Time Deal 500 Mbps", value: "otd_500", contracts: [{ value: 24, price: "3000" }] },
        ...DEFAULT_PLANS.RESIDENTIAL
      ]
    } : {
      RESIDENTIAL: location.user ? DEFAULT_PLANS.RESIDENTIAL : []
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

interface LocationData {
  name: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  user: boolean;
  plans: {
    RESIDENTIAL: Plan[];
  };
}

interface FormData {
  location: string;
  applicantType: string;
  planType: 'GENERAL' | 'WINBACK';
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
  remarks?: string;
  promoCode?: string;
  agentCode?: string;
  termsAgreed: boolean;
  payMethod: string;
  addons: {
    voicePlanId?: number;
    voicePlanName?: string;
    voicePlanPrice?: number;
    routerId?: number;
    routerName?: string;
    routerPrice?: number;
  };
  files: File[];
  icFile?: File | null;
  spaFile?: File | null;
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
    planType: 'GENERAL',
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
    remarks: '',
    promoCode: '',
    agentCode: '',
    termsAgreed: false,
    payMethod: 'pay_later',
    addons: {},
    files: [],
    icFile: null,
    spaFile: null,
    additionalFile: null,
    paymentSlipFile: null,
    applicationFormFile: null
  });

  const handleSubmit = async () => {
    // Construct WhatsApp message with ALL details
    const addonsText = [
      formData.addons.voicePlanName ? `- Voice: ${formData.addons.voicePlanName} (RM ${formData.addons.voicePlanPrice?.toFixed(2)})` : null,
      formData.addons.routerName ? `- Router: ${formData.addons.routerName} (RM ${formData.addons.routerPrice?.toFixed(2)})` : null
    ].filter(Boolean).join('%0A');

    const message = `*FreshTel New Subscription*%0A%0A` +
      `*PLAN TYPE:* ${formData.planType === 'WINBACK' ? 'Winback Switching Campaign' : 'General Plan'}%0A` +
      `*PLAN:* ${formData.plan.toUpperCase().replace('_', ' ')}%0A` +
      `*CONTRACT:* ${formData.contract === 0 ? 'No Contract' : formData.contract + ' Months'}%0A` +
      `*PRICE:* RM ${formData.contractPrice}/mo%0A%0A` +
      `*PERSONAL DETAILS:*%0A` +
      `- Name: ${formData.name}%0A` +
      `- NRIC/Passport: ${formData.nricPassport}%0A` +
      `- Email: ${formData.email}%0A` +
      `- Mobile: ${formData.mobile}%0A` +
      `${formData.secondaryMobile ? `- Secondary Mobile: ${formData.secondaryMobile}%0A` : ''}` +
      `${formData.emergencyMobile ? `- Emergency Mobile: ${formData.emergencyMobile}%0A` : ''}%0A` +
      `*INSTALLATION:*%0A` +
      `- Location: ${formData.location}%0A` +
      `- Address: ${formData.address.unit}, ${formData.address.street}, ${formData.address.city}, ${formData.address.zip}, ${formData.address.state}%0A` +
      `- Preferred Date: ${formData.installationDate} (${formData.installationSession})%0A%0A` +
      `*ADD-ONS:*%0A${addonsText || 'None'}%0A%0A` +
      `*REMARKS:* ${formData.remarks || 'None'}%0A` +
      `*PROMO CODE:* ${formData.promoCode || 'None'}%0A` +
      `*AGENT CODE:* ${formData.agentCode || 'None'}`;

    // Send to register.php for emails
    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'address' || key === 'addons') {
        submissionData.append(key, JSON.stringify(value));
      } else if (key === 'files' && Array.isArray(value)) {
        value.forEach((file: File) => {
          submissionData.append('files[]', file);
        });
      } else if (value instanceof File) {
        submissionData.append(key, value);
      } else if (value !== null && value !== undefined) {
        submissionData.append(key, String(value));
      }
    });

    try {
      // Background fetch to register.php
      fetch('/register.php', {
        method: 'POST',
        body: submissionData,
      });
    } catch (e) {
      console.error('Email submission error', e);
    }

    // Open WhatsApp
    window.open(`https://wa.me/601135503022?text=${message}`, '_blank');
  };

  const nextStep = () => {
    if (step === 3) {
      handleSubmit();
      return;
    }
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 md:pt-32 md:pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-zinc-900 mb-8 md:mb-12">Normal Subscription</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-12 md:mb-16 px-2 overflow-x-hidden">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex flex-col items-center relative gap-2">
                <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                  step > i + 1 ? 'bg-[#EF4444] border-[#EF4444]' : 
                  step === i + 1 ? 'bg-white border-[#EF4444]' : 'bg-[#E5E7EB] border-[#E5E7EB]'
                }`}>
                  {step > i + 1 ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className={`text-xs font-black ${step === i + 1 ? 'text-[#EF4444]' : 'text-zinc-400'}`}>
                      {i + 1}
                    </span>
                  )}
                </div>
                <span className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase whitespace-nowrap transition-colors ${
                  step === i + 1 ? 'text-[#EF4444]' : 'text-zinc-400'
                }`}>
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-8 sm:w-16 md:w-24 h-1 mx-2 sm:mx-4 -mt-6 transition-all ${
                  step > i + 1 ? 'bg-[#EF4444]' : 'bg-[#E5E7EB]'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F9F8F3] rounded-2xl md:rounded-3xl p-6 sm:p-12 shadow-sm border border-zinc-200">
          {step === 1 && (
            <Step1Plan formData={formData} setFormData={setFormData} onNext={nextStep} />
          )}
          {step === 2 && (
            <Step2Details formData={formData} setFormData={setFormData} onNext={nextStep} onPrev={prevStep} />
          )}
          {step === 3 && (
            <Step3Addons formData={formData} setFormData={setFormData} onNext={nextStep} onPrev={prevStep} />
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div className="space-y-6">
        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Installation Location</label>
          <input 
            list="locations"
            className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder="Search location..."
            value={formData.location}
            onChange={handleLocationChange}
          />
          <datalist id="locations">
            {LOCATIONS.map(l => <option key={l.name} value={l.name} />)}
            <option value="Others (Fill manually)" />
          </datalist>
          <p className="mt-2 text-[10px] md:text-xs text-zinc-500 font-bold">
            Click <a href="#" className="text-[#EF4444]">Here</a> if you unable to find your Installation Location
          </p>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Plan Type</label>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
            <button
              onClick={() => setFormData({ ...formData, planType: 'GENERAL', plan: '', contract: 0, contractPrice: '' })}
              className={`p-4 rounded-xl border-2 transition-all text-center font-black text-sm md:text-base cursor-pointer ${
                formData.planType === 'GENERAL'
                  ? 'border-[#EF4444] bg-red-50 text-[#EF4444] shadow-md shadow-red-100'
                  : 'border-zinc-300 bg-white text-zinc-500 hover:border-zinc-400'
              }`}
            >
              General Plan
            </button>
            <button
              onClick={() => setFormData({ ...formData, planType: 'WINBACK', plan: '', contract: 0, contractPrice: '' })}
              className={`p-4 rounded-xl border-2 transition-all text-center font-black text-sm md:text-base cursor-pointer ${
                formData.planType === 'WINBACK'
                  ? 'border-[#EF4444] bg-red-50 text-[#EF4444] shadow-md shadow-red-100'
                  : 'border-zinc-300 bg-white text-zinc-500 hover:border-zinc-400'
              }`}
            >
              Win-back Campaign
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Choose Your Plan</label>
          <select 
            className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold appearance-none text-zinc-900 text-sm md:text-base cursor-pointer"
            value={formData.plan}
            onChange={(e) => setFormData({...formData, plan: e.target.value, contract: 0, contractPrice: ''})}
          >
            <option value="">--Select Internet Package--</option>
            {(() => {
              const locationData = (LOCATIONS as LocationData[]).find(l => l.name === formData.location);
              let plans = formData.planType === 'WINBACK'
                ? WINBACK_PLANS.RESIDENTIAL
                : (locationData?.plans.RESIDENTIAL || []);
              if (plans.length === 0) {
                plans = formData.planType === 'WINBACK' ? WINBACK_PLANS.RESIDENTIAL : DEFAULT_PLANS.RESIDENTIAL;
              }
              return plans.map(p => (
                <option key={p.value} value={p.value} className="font-bold">{p.label}</option>
              ));
            })()}
          </select>
        </div>

        {formData.plan && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Contract Period (Months)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {(() => {
                const locationData = (LOCATIONS as LocationData[]).find(l => l.name === formData.location);
                let plans = formData.planType === 'WINBACK'
                  ? WINBACK_PLANS.RESIDENTIAL
                  : (locationData?.plans.RESIDENTIAL || []);
                if (plans.length === 0) {
                  plans = formData.planType === 'WINBACK' ? WINBACK_PLANS.RESIDENTIAL : DEFAULT_PLANS.RESIDENTIAL;
                }
                const planData = plans.find(p => p.value === formData.plan);
                return planData?.contracts.map(c => (
                  <button
                    key={c.value}
                    onClick={() => setFormData({...formData, contract: c.value, contractPrice: c.price})}
                    className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      formData.contract === c.value 
                        ? 'border-[#EF4444] bg-red-50 text-[#EF4444] shadow-md shadow-red-100' 
                        : 'border-zinc-300 bg-white text-zinc-400 hover:border-zinc-400'
                    }`}
                  >
                    <div className="text-base md:text-lg font-black">{c.label || c.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">
                      RM {c.price}{c.price.includes('.') ? '' : '.00'}
                    </div>
                  </button>
                ));
              })()}
            </div>
            {formData.planType === 'WINBACK' && (
              <div className="mt-4 bg-red-50/60 border border-red-100 rounded-xl p-4 text-[11px] font-bold text-red-600 flex flex-col gap-1.5 shadow-sm">
                <div className="flex items-center gap-1.5 uppercase tracking-wider text-xs">
                  <span>💡</span> Campaign Special Win-back Promo:
                </div>
                <div className="ml-5 font-semibold text-zinc-700 flex flex-col gap-1">
                  {formData.plan === 'wb_300' && (
                    <>
                      <div>• Plan: <span className="font-extrabold text-zinc-900">300Mbps</span> (36 Months Loyalty Switching Promo)</div>
                      <div>• Pricing: <span className="font-extrabold text-[#EF4444]">RM 44.50/mth</span> for 1st 12 months, followed by <span className="font-extrabold text-zinc-950">RM 89.00/mth</span> for the remaining 24 months.</div>
                    </>
                  )}
                  {formData.plan === 'wb_500' && (
                    <>
                      <div>• Plan: <span className="font-extrabold text-zinc-900">500Mbps</span> (36 Months Loyalty Switching Promo)</div>
                      <div>• Pricing: <span className="font-extrabold text-[#EF4444]">RM 54.50/mth</span> for 1st 12 months, followed by <span className="font-extrabold text-zinc-950">RM 109.00/mth</span> for the remaining 24 months.</div>
                    </>
                  )}
                  {formData.plan === 'wb_1g' && (
                    <>
                      <div>• Plan: <span className="font-extrabold text-zinc-900">1Gbps</span> (36 Months Loyalty Switching Promo)</div>
                      <div>• Pricing: <span className="font-extrabold text-[#EF4444]">RM 79.50/mth</span> for 1st 12 months, followed by <span className="font-extrabold text-zinc-950">RM 159.00/mth</span> for the remaining 24 months.</div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="mt-4 space-y-2">
              <p className="text-[10px] font-bold text-zinc-400 italic">* All prices shown are inclusive of 6% SST.</p>
              <div className="flex gap-2 items-start bg-zinc-100/50 p-3 rounded-lg">
                <span className="text-[#EF4444] text-[10px] font-black mt-0.5">⚠️</span>
                <p className="text-[10px] font-bold text-zinc-500 italic leading-tight uppercase tracking-tightest">A Deposit and/or Installation Charge is applicable for Malaysian & Non-Malaysian</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6 px-0 md:px-4">
        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Installation Address</label>
          <div className="space-y-3">
            <input 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
              placeholder="Unit No."
              value={formData.address.unit}
              onChange={(e) => setFormData({...formData, address: {...formData.address, unit: e.target.value}})}
            />
            <input 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
              placeholder="Street" 
              value={formData.address.street}
              onChange={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})}
            />
            <div className="grid grid-cols-2 gap-3">
              <input 
                className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
                placeholder="City" 
                value={formData.address.city}
                onChange={(e) => setFormData({...formData, address: {...formData.address, city: e.target.value}})}
              />
              <input 
                className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
                placeholder="Zip" 
                value={formData.address.zip}
                onChange={(e) => setFormData({...formData, address: {...formData.address, zip: e.target.value}})}
              />
            </div>
            <input 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
              placeholder="State" 
              value={formData.address.state}
              onChange={(e) => setFormData({...formData, address: {...formData.address, state: e.target.value}})}
            />
            <input 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-5 py-3 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base" 
              placeholder="Country" 
              value={formData.address.country}
              onChange={(e) => setFormData({...formData, address: {...formData.address, country: e.target.value}})}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">I&apos;m a tenant</label>
          <div className="grid grid-cols-2 gap-3">
            <button 
              className={`py-3.5 md:py-4 rounded-xl font-black text-xs md:text-sm tracking-widest transition-all ${
                formData.isTenant === true ? 'bg-[#EF4444] text-white shadow-lg shadow-red-100' : 'bg-white border-2 border-zinc-300 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, isTenant: true})}
            >
              YES
            </button>
            <button 
              className={`py-3.5 md:py-4 rounded-xl font-black text-xs md:text-sm tracking-widest transition-all ${
                formData.isTenant === false ? 'bg-[#EF4444] text-white shadow-lg shadow-red-100' : 'bg-white border-2 border-zinc-300 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, isTenant: false})}
            >
              NO
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Preferred Installation</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input 
              type="date" 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-4 py-3.5 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 text-sm md:text-base"
              value={formData.installationDate}
              onChange={(e) => setFormData({...formData, installationDate: e.target.value})}
            />
            <select 
              className="w-full bg-white border-2 border-zinc-300 rounded-xl px-4 py-3.5 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 text-sm md:text-base cursor-pointer"
              value={formData.installationSession}
              onChange={(e) => setFormData({...formData, installationSession: e.target.value})}
            >
              <option value="">Select Session</option>
              <option value="morning">Morning (9AM-1PM)</option>
              <option value="afternoon">Afternoon (2PM-6PM)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center mt-6 md:mt-8">
        <button 
          onClick={onNext}
          disabled={!formData.location || !formData.plan || formData.contract === undefined || !formData.installationDate || !formData.installationSession}
          className={`w-full sm:w-auto sm:px-24 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg tracking-widest shadow-xl transition-all ${
            formData.location && formData.plan && (formData.contract !== undefined) && formData.installationDate && formData.installationSession
              ? 'bg-[#EF4444] text-white hover:bg-zinc-900 hover:scale-[1.02] active:scale-95' 
              : 'bg-zinc-200 text-zinc-400 cursor-not-allowed hidden md:block'
          }`}
        >
          {formData.location && formData.plan && (formData.contract !== undefined) && formData.installationDate && formData.installationSession ? 'NEXT STEP' : 'PLEASE COMPLETE FORM'}
        </button>
        {/* Mobile-only sticky-like button if useful, or just full width */}
      </div>
    </div>
  );
}

function Step2Details({ formData, setFormData, onNext, onPrev }: StepProps) {
  

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
    <div className="space-y-8 md:space-y-12 animate-in fade-in duration-500">
      <h3 className="text-xl md:text-2xl font-black text-center text-zinc-900 uppercase tracking-widest">Personal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6">
        {/* Nationality */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Nationality</label>
          <div className="flex gap-3">
            <button 
              className={`flex-1 py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-xs tracking-widest transition-all ${
                formData.nationality === 'MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg shadow-red-100' : 'bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-300'
              }`}
              onClick={() => setFormData({...formData, nationality: 'MALAYSIAN'})}
            >
              MALAYSIAN
            </button>
            <button 
              className={`flex-1 py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-xs tracking-widest transition-all ${
                formData.nationality === 'NON-MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg shadow-red-100' : 'bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-300'
              }`}
              onClick={() => setFormData({...formData, nationality: 'NON-MALAYSIAN'})}
            >
              NON-MALAYSIAN
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Full Name (As per IC/Passport)</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* IC / Passport */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic font-bold">
            {formData.nationality === 'MALAYSIAN' ? 'NRIC Number' : 'Passport Number'}
          </label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder={formData.nationality === 'MALAYSIAN' ? 'Eg: 880101109999' : 'Enter Passport No.'}
            maxLength={formData.nationality === 'MALAYSIAN' ? 12 : undefined}
            value={formData.nricPassport}
            onChange={(e) => setFormData({...formData, nricPassport: e.target.value})}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Email Address</label>
          <input 
            type="email"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Date of Birth</label>
          <input 
            type="date"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 text-sm md:text-base"
            value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
          />
        </div>

        {/* Primary Contact */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Primary Contact Number</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder="01XXXXXXXX"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
        </div>

        {/* Secondary Contact */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic text-zinc-400/60">Secondary Contact (Optional)</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder="01XXXXXXXX"
            value={formData.secondaryMobile}
            onChange={(e) => setFormData({...formData, secondaryMobile: e.target.value})}
          />
        </div>

        {/* Emergency Contact */}
        <div className="space-y-2">
          <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic text-zinc-400/60">Emergency Contact (Optional)</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300 text-sm md:text-base"
            placeholder="01XXXXXXXX"
            value={formData.emergencyMobile}
            onChange={(e) => setFormData({...formData, emergencyMobile: e.target.value})}
          />
        </div>
      </div>

      {/* Other Details */}
      <div className="pt-8 border-t border-zinc-200">
        <h4 className="text-lg font-black text-zinc-900 uppercase tracking-widest mb-6 text-center">Additional Info</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Remarks (Optional)</label>
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 text-sm md:text-base"
              placeholder="Any specific requests?"
              value={formData.remarks}
              onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest italic">Promo Code (Optional)</label>
            <input 
              className="w-full bg-white border-2 border-zinc-200 rounded-xl px-5 py-3.5 md:px-6 md:py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 text-sm md:text-base"
              placeholder="ENTER CODE"
              value={formData.promoCode}
              onChange={(e) => setFormData({...formData, promoCode: e.target.value})}
            />
          </div>
          
        </div>
      </div>

      {/* Attachments */}
      <div className="pt-8 border-t border-zinc-200 space-y-8">
        <h4 className="text-lg font-black text-zinc-900 uppercase tracking-widest text-center">Required Documents</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FileUploadField 
            label={formData.nationality === 'MALAYSIAN' ? "IC Front & Back (Scanned Copy)" : "Passport ID Page Copy"}
            file={formData.icFile}
            onChange={(e) => handleFileChange('icFile', e)}
          />

          <FileUploadField 
            label="Supporting Document (SPA/Utility Bill)"
            file={formData.additionalFile}
            onChange={(e) => handleFileChange('additionalFile', e)}
          />

          <FileUploadField 
            label="Payment Receipt / Slip (Optional)"
            file={formData.paymentSlipFile}
            onChange={(e) => handleFileChange('paymentSlipFile', e)}
          />

          <FileUploadField 
            label="Agent / Referral Code (Optional)"
            isInput
            value={formData.agentCode}
            onChangeInput={(val) => setFormData({...formData, agentCode: val})}
          />

          <FileUploadField 
            label="Signed Application Form"
            file={formData.applicationFormFile}
            onChange={(e) => handleFileChange('applicationFormFile', e)}
          />
        </div>
      </div>

      {/* Terms and Navigation */}
      <div className="pt-8 md:pt-12 space-y-8">
        <div className="flex items-start justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
          <input 
            type="checkbox" 
            id="terms"
            className="w-5 h-5 md:w-6 md:h-6 mt-0.5 rounded accent-[#EF4444] cursor-pointer shrink-0"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({...formData, termsAgreed: e.target.checked})}
          />
          <label htmlFor="terms" className="text-xs md:text-sm font-bold text-zinc-600 cursor-pointer leading-tight">
            I confirm that I have read, understood and agree to the <a href="/terms-conditions" target="_blank" className="text-[#EF4444] underline hover:text-zinc-900">Terms & Conditions</a> provided by FreshTel Internet.
          </label>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-3 md:gap-4 max-w-3xl mx-auto">
          <button 
            onClick={onPrev}
            className="w-full py-4 md:py-5 rounded-2xl font-black text-xs md:text-sm tracking-[0.2em] transition-all bg-white border-2 border-zinc-200 text-zinc-400 hover:border-zinc-900 hover:text-zinc-900"
          >
            PREVIOUS
          </button>
          <button 
            onClick={onNext}
            disabled={!isStep2Valid}
            className={`w-full py-4 md:py-5 rounded-2xl font-black text-xs md:text-sm tracking-[0.2em] transition-all ${
              isStep2Valid 
                ? 'bg-[#EF4444] text-white shadow-xl shadow-red-100 hover:bg-zinc-900' 
                : 'bg-zinc-200 text-zinc-300 cursor-not-allowed'
            }`}
          >
            CONTINUE
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
          className="w-full bg-white border-2 border-zinc-300 rounded-xl px-4 py-3 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900"
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
        <div className="bg-white border-2 border-zinc-300 rounded-xl p-4 flex items-center gap-4 group-hover:border-zinc-300 transition-all">
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

function Step3Addons({ formData, setFormData, onNext, onPrev }: StepProps) {
  const voicePlans = [
    { id: 43, name: 'Commercial Voice Charges', price: 0, desc: 'Special Offer: Free 100 Minutes with Analog Phone' }
  ];

  const routers = [{ id: 764, name: 'Mesh Router - Top Up RM20', price: 20, desc: 'Top Up RM 20 get mesh router for better connection. It will charge into your monthly bill' }];

  const handleToggleVoice = (plan: typeof voicePlans[0]) => {
    setFormData(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        voicePlanId: prev.addons.voicePlanId === plan.id ? undefined : plan.id,
        voicePlanName: prev.addons.voicePlanId === plan.id ? undefined : plan.name,
        voicePlanPrice: prev.addons.voicePlanId === plan.id ? undefined : plan.price,
      }
    }));
  };

  const handleToggleRouter = (router: typeof routers[0]) => {
    setFormData(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        routerId: prev.addons.routerId === router.id ? undefined : router.id,
        routerName: prev.addons.routerId === router.id ? undefined : router.name,
        routerPrice: prev.addons.routerId === router.id ? undefined : router.price,
      }
    }));
  };

  return (
    <div className="text-center py-6 md:py-10 animate-in fade-in zoom-in-95 duration-500">
      <h3 className="text-xl md:text-2xl font-black text-zinc-900 mb-2 uppercase tracking-tightest">Enhance Your Experience</h3>
      <p className="text-zinc-500 font-bold mb-8 md:mb-12 text-sm md:text-base">Available Add-ons for your subscription</p>
      
      <div className="space-y-10 md:space-y-12">
        {/* Voice Plans */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[2px] flex-1 bg-zinc-100"></div>
            <h4 className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">Voice Plans</h4>
            <div className="h-[2px] flex-1 bg-zinc-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {voicePlans.map(plan => (
              <div key={plan.id} className={`bg-white p-6 md:p-8 rounded-2xl border-2 transition-all shadow-sm relative overflow-hidden group hover:border-[#EF4444] ${formData.addons.voicePlanId === plan.id ? 'border-[#EF4444] ring-4 ring-[#EF4444]/5' : 'border-zinc-100'}`}>
                <div className={`${formData.addons.voicePlanId === plan.id ? 'text-[#EF4444]' : 'text-zinc-300'} mb-4 transition-colors`}>
                  <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <h4 className="text-base md:text-lg font-black mb-2 text-zinc-900 leading-tight">{plan.name}</h4>
                <div className="text-xl md:text-2xl font-black text-[#EF4444] mb-4">RM {plan.price.toFixed(2)}</div>
                {plan.desc && <p className="text-[10px] md:text-xs text-zinc-400 font-bold mb-6 italic leading-relaxed">{plan.desc}</p>}
                <button 
                  onClick={() => handleToggleVoice(plan)}
                  className={`w-full py-3.5 md:py-4 rounded-xl font-black text-xs md:text-sm transition-all ${formData.addons.voicePlanId === plan.id ? 'bg-zinc-900 text-white shadow-lg' : 'bg-zinc-100 text-zinc-400 hover:bg-[#EF4444] hover:text-white'}`}
                >
                  {formData.addons.voicePlanId === plan.id ? 'SELECTED' : 'SELECT'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Routers Add-ons */}
        {routers.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[2px] flex-1 bg-zinc-100"></div>
              <h4 className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">Mesh Router</h4>
              <div className="h-[2px] flex-1 bg-zinc-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {routers.map(router => (
                <div key={router.id} className={`bg-white p-6 md:p-8 rounded-2xl border-2 transition-all shadow-sm relative overflow-hidden group hover:border-[#EF4444] ${formData.addons.routerId === router.id ? 'border-[#EF4444] ring-4 ring-[#EF4444]/5' : 'border-zinc-100'}`}>
                  <div className={`${formData.addons.routerId === router.id ? 'text-[#EF4444]' : 'text-zinc-300'} mb-4 transition-colors`}>
                    <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                  </div>
                  <h4 className="text-base md:text-lg font-black mb-2 text-zinc-900 leading-tight">{router.name}</h4>
                  <div className="text-xl md:text-2xl font-black text-[#EF4444] mb-4">RM {router.price.toFixed(2)}</div>
                  {router.desc && <p className="text-[10px] md:text-xs text-zinc-400 font-bold mb-6 italic leading-relaxed">{router.desc}</p>}
                  <button 
                    onClick={() => handleToggleRouter(router)}
                    className={`w-full py-3.5 md:py-4 rounded-xl font-black text-xs md:text-sm transition-all ${formData.addons.routerId === router.id ? 'bg-zinc-900 text-white shadow-lg' : 'bg-zinc-100 text-zinc-400 hover:bg-[#EF4444] hover:text-white'}`}
                  >
                    {formData.addons.routerId === router.id ? 'SELECTED' : 'SELECT'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 md:gap-4 justify-center mt-12 pt-12 border-t border-zinc-100">
        <button onClick={onPrev} className="w-full sm:max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white hover:border-zinc-900 hover:text-zinc-900 transition-all text-xs tracking-widest uppercase">PREVIOUS</button>
        <button onClick={onNext} className="w-full sm:max-w-[200px] bg-[#EF4444] text-white py-4 rounded-xl font-black shadow-lg shadow-red-100 hover:bg-zinc-900 transition-all text-xs tracking-widest uppercase">SUBMIT FORM</button>
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

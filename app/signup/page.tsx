'use client';

import { useState } from 'react';

const STEPS = ['PLAN', 'DETAIL', 'ADD-ON', 'PREVIEW'];

const LOCATIONS = [
  { name: "168 Park Selayang", street: "Jalan Kuching", city: "Batu Caves", zip: "68100", state: "Selangor", user: true, business: false },
  { name: "188 Suites", street: "Jalan Sultan Ismail, City Centre", city: "Kuala Lumpur", zip: "50250", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "1Medini Condominium", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: true, business: false },
  { name: "1Medini Condominium Retails", street: "Iskandar Puteri", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: false, business: true },
  { name: "22 Macalisterz", street: "Jalan Macalister", city: "George Town", zip: "10400", state: "Pulau Pinang", user: true, business: false },
  { name: "8scape Residensi", street: "Taman Perling", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: false },
  { name: "99 Residence", street: "Jalan Seri Utara", city: "Kuala Lumpur", zip: "68100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "ANYA Shorea Park Residence 2", street: "Taman Putra Prima", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "ARC Austin Hill @ Johor", street: "Taman Daya", city: "Johor Bahru", zip: "81100", state: "Johor", user: true, business: false },
  { name: "Admiral Residences @ Kota Laksamana", street: "Kota Laksamana", city: "Melaka", zip: "75200", state: "Melaka", user: true, business: false },
  { name: "Aera Residence", street: "PJS 5", city: "Petaling Jaya", zip: "46150", state: "Selangor", user: true, business: false },
  { name: "Alanis Residence", street: "Warisan Puteri", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Alinea Suites", street: "Seksyen 14", city: "Shah Alam", zip: "40000", state: "Selangor", user: true, business: false },
  { name: "Almyra Residence", street: "Bandar Puteri Bangi", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Alstonia Residence Sungai Long", street: "Bandar Sungai Long", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Amber Cove Premier Suites Melaka", street: "Impiana Impression", city: "Melaka", zip: "75200", state: "Melaka", user: true, business: false },
  { name: "Amberside", street: "Country Garden Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Anderson Residences @ Ipoh", street: "Jalan Anderson", city: "Ipoh", zip: "30000", state: "Perak", user: true, business: false },
  { name: "Anggerik Wira", street: "Taman Anggerik", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: false },
  { name: "Anggun Residences", street: "Jalan Sultan Ismail", city: "Kuala Lumpur", zip: "50250", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Apex Tower @ CyberSquare", street: "Cyberjaya", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Apex Tower Retails @ CyberSquare", street: "Cyberjaya", city: "Cyberjaya", zip: "63000", state: "Selangor", user: false, business: true },
  { name: "Aradia Residence @ Lake City", street: "Jalan Kuching", city: "Kuala Lumpur", zip: "68100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Aradia Residence Commercial @ Lake City", street: "Jalan Kuching", city: "Kuala Lumpur", zip: "68100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Arena Residence 1", street: "Bayan Baru", city: "Bayan Lepas", zip: "11900", state: "Pulau Pinang", user: true, business: false },
  { name: "Arena Residence 2", street: "Bayan Baru", city: "Bayan Lepas", zip: "11900", state: "Pulau Pinang", user: true, business: false },
  { name: "Aster Residence", street: "Cheras Hartamas", city: "Cheras", zip: "56100", state: "Kuala Lumpur", user: true, business: false },
  { name: "Astoria Ampang", street: "Jalan Ampang", city: "Kuala Lumpur", zip: "55000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Atlantis Residence", street: "Kota Laksamana", city: "Melaka", zip: "75200", state: "Melaka", user: true, business: false },
  { name: "Aurora Place Bukit Jalil", street: "Persiaran Jalil 1", city: "Bukit Jalil", zip: "57000", state: "Kuala Lumpur", user: true, business: false },
  { name: "Bangsar Hill Park Condominium (D, E)", street: "Lorong Maarof", city: "Bangsar", zip: "59000", state: "Kuala Lumpur", user: true, business: false },
  { name: "Bay Laurel @ Country Garden Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Bay Point @ Country Garden Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Bayu Angkasa", street: "Bukit Bandaraya", city: "Bangsar", zip: "59100", state: "Kuala Lumpur", user: true, business: false },
  { name: "Beletime @ Country Garden Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: true },
  { name: "Bell Avenue", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: true },
  { name: "Bell Suite", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Bennington", street: "SkyArena", city: "Setapak", zip: "53200", state: "Kuala Lumpur", user: true, business: false },
  { name: "Bercham 138 @ Apartment Bakti Putra", street: "Bercham", city: "Ipoh", zip: "31400", state: "Perak", user: true, business: false },
  { name: "Bercham Prima Ipoh Kiara @ Perak", street: "Bercham", city: "Ipoh", zip: "31400", state: "Perak", user: true, business: false },
  { name: "Bora Residence @ Tropicana Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Botanika @ Tebrau Bay", street: "Jalan Bayu Puteri 2", city: "Johor Bahru", zip: "80150", state: "Johor", user: true, business: false },
  { name: "Brezza One Residency", street: "Bukit Ampang Permai", city: "Ampang", zip: "68000", state: "Selangor", user: true, business: false },
  { name: "Brezza One Residency Retails", street: "Bukit Ampang Permai", city: "Ampang", zip: "68000", state: "Selangor", user: false, business: true },
  { name: "Cantara Residences", street: "Ara Damansara", city: "Petaling Jaya", zip: "47301", state: "Selangor", user: true, business: false },
  { name: "Centroz", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: true },
  { name: "Cerrado @ Southville City", street: "Southville City", city: "Bangi", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Ceylonz Suites", street: "Persiaran Raja Chulan", city: "Kuala Lumpur", zip: "50200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Chambers Residence", street: "Jalan Ipoh", city: "Kuala Lumpur", zip: "51200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Citizen 2 @ Old Klang Road", street: "Jalan Klang Lama", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Clio Residences", street: "IOI Resort City", city: "Putrajaya", zip: "62502", state: "Putrajaya", user: true, business: false },
  { name: "Cloud Tree", street: "Bandar Damai Perdana", city: "Cheras", zip: "56000", state: "Selangor", user: true, business: false },
  { name: "Colony @ Wisma Infinitum", street: "Jalan Dewan Sultan Sulaiman", city: "Kuala Lumpur", zip: "50300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Colony Retail @ Wisma Infinitum", street: "Jalan Dewan Sultan Sulaiman", city: "Kuala Lumpur", zip: "50300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Conezion", street: "IOI Resort City", city: "Putrajaya", zip: "62502", state: "Putrajaya", user: true, business: false },
  { name: "Crystal Creek Resort", street: "Taiping", city: "Taiping", zip: "34000", state: "Perak", user: true, business: false },
  { name: "D'Clover Residences", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Cosmos Residence", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Erica Residences", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Festivo Residence @ Perak", street: "Medan Ipoh", city: "Ipoh", zip: "31400", state: "Perak", user: true, business: false },
  { name: "D'Ivo Residence", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "D'Nuri Residences", street: "Desa Petaling", city: "Kuala Lumpur", zip: "57100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "D'Quince Residence", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Rapport", street: "Jalan Ampang", city: "Ampang", zip: "55000", state: "Kuala Lumpur", user: true, business: false },
  { name: "D'Ruby @ Puchong", street: "Puchong", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "D'Terra Residences", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Vervain Residence", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "D'Vine Residences", street: "Central Park Damansara", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Damai 88", street: "Jalan Ampang", city: "Kuala Lumpur", zip: "55000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Eaton Residences", street: "Jalan Kia Peng", city: "Kuala Lumpur", zip: "50450", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Edusphere Suites", street: "Cyberjaya", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Emira Residence", street: "Seksyen 13", city: "Shah Alam", zip: "40100", state: "Selangor", user: true, business: true },
  { name: "Empire City_Block A_Halo", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block B_Sunday", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block C_Colonial Loft", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block D_My Loft", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block E_5-Star Marriot International Hotel", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block E_Serviced Office Suites", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_Block F_5-Star Autograph International Boutique Hotel", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block G", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_Block H_Hextar Tower", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_Block J_Victoria Suite", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_Block L", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Empire City_Block M_Soho", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_Block N_MyEG", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: false, business: true },
  { name: "Empire City_CGV Hotel", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Expressionz Professional Suites", street: "Jalan Tun Razak", city: "Kuala Lumpur", zip: "50400", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Forest City Ataraxia Park 1", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Ataraxia Park 2", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Ataraxia Park 3", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Ataraxia Park 3 @ Retail", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Ataraxia Park 4", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Cerulean Bay", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Regalia Park", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Starview Bay", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Forest City Starview Bay @ Retails", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: true },
  { name: "Gaya Resort Homes", street: "Bukit Rimau", city: "Shah Alam", zip: "40460", state: "Selangor", user: true, business: false },
  { name: "Giverny Walk", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: true },
  { name: "Glisten Hill Condominium @ Juru", street: "Juru", city: "Simpang Ampat", zip: "14100", state: "Pulau Pinang", user: true, business: false },
  { name: "Gurneymas Residence", street: "Kampung Datuk Keramat", city: "Kuala Lumpur", zip: "54000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "HCK Tower Damansara @ Empire City", street: "Damansara Perdana", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: true },
  { name: "Helix2 (Residensi Heliks)", street: "Taman PJ South", city: "Petaling Jaya", zip: "46000", state: "Selangor", user: true, business: false },
  { name: "Ho Hup Tower @ Aurora Place Bukit Jalil", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "IFS Seri Iskandar", street: "Seri Iskandar", city: "Seri Iskandar", zip: "32610", state: "Perak", user: true, business: false },
  { name: "IOI Rio", street: "Bandar Puteri Puchong", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: true },
  { name: "Icon City", street: "Sungai Way", city: "Petaling Jaya", zip: "47300", state: "Selangor", user: true, business: true },
  { name: "Idaman Abadi", street: "Tropicana Aman", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Idaman Abadi 2", street: "Tropicana Aman", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Ipoh Convention Centre (ICC)", street: "Jalan Jalan Sultan Abdul Jalil", city: "Ipoh", zip: "30000", state: "Perak", user: true, business: false },
  { name: "Isola KLCC", street: "Jalan Yap Kwan Seng", city: "Kuala Lumpur", zip: "50450", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Jasper Square", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: true },
  { name: "KOTA PUTERI, BATU ARANG", street: "Batu Arang", city: "Batu Arang", zip: "48100", state: "Selangor", user: true, business: true },
  { name: "KSL Residences 2 @ Kangkar Tebrau", street: "Kangkar Tebrau", city: "Johor Bahru", zip: "81100", state: "Johor", user: true, business: false },
  { name: "KSL Residences @ Daya", street: "Taman Daya", city: "Johor Bahru", zip: "81100", state: "Johor", user: true, business: false },
  { name: "Kampus West City Condominium", street: "Kampar", city: "Kampar", zip: "31900", state: "Perak", user: true, business: false },
  { name: "Ken Rimba", street: "Seksyen 16", city: "Shah Alam", zip: "40200", state: "Selangor", user: true, business: false },
  { name: "Kensho Residence", street: "Taman Danau Desa", city: "Kuala Lumpur", zip: "58100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Kenwingston Platz Residence", street: "Jalan Gombak", city: "Kuala Lumpur", zip: "53000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Kenwingston Skyloft", street: "USJ 1", city: "Subang Jaya", zip: "47600", state: "Selangor", user: true, business: false },
  { name: "KepongMas", street: "Kepong", city: "Kuala Lumpur", zip: "52100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Kings Bay @ Country Garden Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "LEA By The Hills", street: "Taman Melawati", city: "Ulu Kelang", zip: "53100", state: "Selangor", user: true, business: false },
  { name: "LSH 33", street: "Sentul", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "LSH 33 Retails", street: "Sentul", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: false, business: true },
  { name: "La Thea Residences", street: "16 Sierra", city: "Puchong South", zip: "47120", state: "Selangor", user: true, business: false },
  { name: "LakeFront Residence @ Cyberjaya", street: "Persiaran Semarak Api", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Laman Damai @ Country Garden Central Park P6", street: "Persiaran Damansara Aliff", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: false },
  { name: "Laman Glasier @ Country Garden Central Park P2", street: "Persiaran Damansara Aliff", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: true },
  { name: "Laman Harmoni @ Country Garden Central Park P5", street: "Persiaran Damansara Aliff", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: false },
  { name: "Legend Heights @ Sri Segambut", street: "Taman Sri Segambut", city: "Kuala Lumpur", zip: "52000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Lily Apartment @ Kuchai Lama", street: "Kuchai Lama", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Lovell @ Country Garden Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Luxe @ Wisma Infinitum", street: "Jalan Dewan Sultan Sulaiman", city: "Kuala Lumpur", zip: "50300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Luxe Retail @ Wisma Infinitum", street: "Jalan Dewan Sultan Sulaiman", city: "Kuala Lumpur", zip: "50300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "M Adora", street: "Wangsa Melawati", city: "Kuala Lumpur", zip: "53300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M Arisa Sentul", street: "Sentul", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M Centura", street: "Sentul", city: "Kuala Lumpur", zip: "51100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M Oscar", street: "Off Jalan Kuchai Lama", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M Suite @ Menjalara", street: "Bandar Menjalara", city: "Kuala Lumpur", zip: "52200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M Vertica", street: "Jalan Cheras", city: "Kuala Lumpur", zip: "56000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "M101 Dang Wangi", street: "Jalan Dang Wangi", city: "Kuala Lumpur", zip: "50100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "MH Unilodge", street: "Kampar", city: "Kampar", zip: "31900", state: "Perak", user: true, business: false },
  { name: "MIRAI Residences", street: "Kajang 2", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Majestic Maxim", street: "Len Seng", city: "Cheras", zip: "56000", state: "Kuala Lumpur", user: true, business: false },
  { name: "Majestic Residence", street: "Jalan Sultan Ismail", city: "Kuala Lumpur", zip: "50250", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Maple Residences ", street: "Canary Garden", city: "Klang", zip: "42000", state: "Selangor", user: true, business: false },
  { name: "Marbella", street: "Ipoh South Precinct", city: "Ipoh", zip: "31350", state: "Perak", user: true, business: false },
  { name: "Meldrum Height Residence", street: "Jalan Meldrum", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: false },
  { name: "Menara HLA", street: "Jalan Kia Peng", city: "Kuala Lumpur", zip: "50450", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Menara Sunsuria", street: "Jalan Ampang", city: "Kuala Lumpur", zip: "50450", state: "Wilayah Persekutuan Kuala Lumpur", user: false, business: true },
  { name: "Meridin Medini @ Ramada", street: "Medini", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: true, business: false },
  { name: "Meru Prima @ Perak", street: "Meru", city: "Ipoh", zip: "30020", state: "Perak", user: true, business: false },
  { name: "Mesahill Phrase 1 - Tower A", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: false },
  { name: "Mesahill Phrase 2 - Tower B", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: false },
  { name: "Mesahill Phrase 3 - Tower C, D, E", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: false },
  { name: "Mesahill Phrase 4 - Premier 1 & 2", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: false },
  { name: "Mesamall", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: false, business: true },
  { name: "Metro Cheras", street: "Batu 9 Cheras", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: false },
  { name: "Metro Kepong", street: "Kepong", city: "Kuala Lumpur", zip: "52100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Millerz Square A, B", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Millerz Square Retail", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58000", state: "Wilayah Persekutuan Kuala Lumpur", user: false, business: true },
  { name: "Millerz Square Tower C", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Millerz Square Tower D", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Millerz Square Tower E", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Mira @ Shorea Park", street: "Taman Putra Prima", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "Mizumi", street: "Kepong", city: "Kuala Lumpur", zip: "52100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Monet Garden", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Monet Lily", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Monet Springtime", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Mossaz", street: "Empire City", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Mutiara Melaka Beach Resort", street: "Pengkalan Balak", city: "Masjid Tanah", zip: "78300", state: "Melaka", user: true, business: false },
  { name: "Nadayu 801 Subang Murni Apartment", street: "Subang Murni", city: "Shah Alam", zip: "40150", state: "Selangor", user: true, business: false },
  { name: "Nadayu 801 Subang Murni Apartment @ Retails", street: "Subang Murni", city: "Shah Alam", zip: "40150", state: "Selangor", user: false, business: true },
  { name: "Nest 2 Residences", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Netizen", street: "Bandar Tun Hussein Onn", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: false },
  { name: "Nidoz", street: "Desa Petaling", city: "Kuala Lumpur", zip: "57100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Nigella Park @ Forest City", street: "Forest City", city: "Gelang Patah", zip: "81550", state: "Johor", user: true, business: false },
  { name: "Noa Residence", street: "Ukay Heights", city: "Ampang", zip: "68000", state: "Selangor", user: true, business: false },
  { name: "Nouvelle Meru", street: "Meru", city: "Klang", zip: "41050", state: "Selangor", user: true, business: true },
  { name: "Novo 8 Residences", street: "Kampung 8", city: "Melaka", zip: "75200", state: "Melaka", user: true, business: false },
  { name: "Octagon Ipoh @ Perak", street: "Jalan Gereja", city: "Ipoh", zip: "30300", state: "Perak", user: true, business: false },
  { name: "One 49 Resident", street: "Pandan Indah", city: "Kuala Lumpur", zip: "55100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "One Cochrane Residences", street: "Jalan Cochrane", city: "Kuala Lumpur", zip: "55100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "One Maxim", street: "Sentul", city: "Kuala Lumpur", zip: "51100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Ooak Suites", street: "Mont Kiara", city: "Kuala Lumpur", zip: "50480", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Optimus Medini", street: "Medini", city: "Iskandar Puteri", zip: "79250", state: "Johor", user: true, business: false },
  { name: "Opus Residences", street: "Jalan Hang Isap", city: "Kuala Lumpur", zip: "50150", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "PJ Midtown Residential", street: "Seksyen 13", city: "Petaling Jaya", zip: "46200", state: "Selangor", user: true, business: false },
  { name: "PJ Midtown Residential Retails", street: "Seksyen 13", city: "Petaling Jaya", zip: "46200", state: "Selangor", user: false, business: true },
  { name: "PPAM Dalur", street: "Presint 18", city: "Putrajaya", zip: "62100", state: "Putrajaya", user: true, business: false },
  { name: "PPAM Setapak Riviera", street: "Setapak", city: "Kuala Lumpur", zip: "53300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Palazzo Ipoh Garden East", street: "Ipoh Garden East", city: "Ipoh", zip: "31400", state: "Perak", user: true, business: false },
  { name: "Palm Hill Residence 1", street: "Bandar Sungai Long", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Palm Hill Residence 3", street: "Bandar Sungai Long", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Palmyra", street: "Bandar Puteri Bangi", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Pangsapuri Opal", street: "Taman Subang Perdana", city: "Shah Alam", zip: "40150", state: "Selangor", user: true, business: false },
  { name: "Pangsapuri Selangorku @ Amansiara", street: "Amansiara", city: "Selayang", zip: "68100", state: "Selangor", user: true, business: false },
  { name: "Pangsapuri Seri Iskandar @ Perak", street: "Seri Iskandar", city: "Seri Iskandar", zip: "32610", state: "Perak", user: true, business: false },
  { name: "Paradigm Residence @ Johor", street: "Skudai", city: "Johor Bahru", zip: "81200", state: "Johor", user: true, business: false },
  { name: "Pavilion", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Paxtonz", street: "Empire City", city: "Petaling Jaya", zip: "47820", state: "Selangor", user: true, business: false },
  { name: "Piccadilly Service Residence @ Greentown", street: "Greentown", city: "Ipoh", zip: "30450", state: "Perak", user: true, business: false },
  { name: "Pinnacle Sri Petaling", street: "Jalan Radin Anum", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Prima Falim @ Perak", street: "Falim", city: "Ipoh", zip: "30200", state: "Perak", user: true, business: false },
  { name: "Prima Kepayang", street: "Kampung Kepayang", city: "Ipoh", zip: "31300", state: "Perak", user: true, business: false },
  { name: "Putra One Residences", street: "Bukit Rahman Putra", city: "Sungai Buloh", zip: "47000", state: "Selangor", user: true, business: false },
  { name: "R&F Princess Cove 1", street: "Tanjung Puteri", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: false },
  { name: "R&F Princess Cove 1 Retails", street: "Tanjung Puteri", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: true },
  { name: "R&F Princess Cove 2", street: "Tanjung Puteri", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: false },
  { name: "R&F Princess Cove 2 Retails", street: "Tanjung Puteri", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: true },
  { name: "Reizz Residence", street: "Jalan Ampang", city: "Kuala Lumpur", zip: "55000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Res280 Condominium", street: "Selayang", city: "Batu Caves", zip: "68100", state: "Selangor", user: true, business: false },
  { name: "Res280 Condominium Retails", street: "Selayang", city: "Batu Caves", zip: "68100", state: "Selangor", user: false, business: true },
  { name: "Residence Seri Serindit", street: "Jalan Hang Tuah", city: "Melaka", zip: "75300", state: "Melaka", user: true, business: false },
  { name: "Residensi Adelia", street: "Bangi Avenue", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Adelia 2", street: "Bangi Avenue", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Adelia 3", street: "Bangi Avenue", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Adelia 4", street: "Bangi Avenue", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Agile Delima", street: "Jalan Tun Razak", city: "Kuala Lumpur", zip: "50400", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Residensi Alamanda", street: "Serendah", city: "Serendah", zip: "48200", state: "Selangor", user: true, business: false },
  { name: "Residensi Aman Bukit Jalil", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Residensi Jalilmas", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Residensi Lili", street: "Green Beverly Hills", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: false },
  { name: "Residensi M Luna", street: "Kepong", city: "Kuala Lumpur", zip: "52100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Residensi Maarof", street: "Bangsar", city: "Kuala Lumpur", zip: "59000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Residensi Mutiara", street: "Kajang", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Nexus Kajang", street: "Jalan Bukit", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Residensi Selangorku Begonia", street: "Taman Gembira", city: "Klang", zip: "41100", state: "Selangor", user: true, business: false },
  { name: "Residensi Skyluxe", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Residensi Sutera 7", street: "Taman Sutera Utama", city: "Skudai", zip: "81300", state: "Johor", user: true, business: false },
  { name: "Retail @ Aurora Place Bukit Jalil", street: "Persiaran Jalil 1", city: "Bukit Jalil", zip: "57000", state: "Kuala Lumpur", user: true, business: true },
  { name: "Rev.O @ Aurora Place Bukit Jalil", street: "Persiaran Jalil 1", city: "Bukit Jalil", zip: "57000", state: "Kuala Lumpur", user: true, business: false },
  { name: "Riveria City KL Sentral", street: "Brickfields", city: "Kuala Lumpur", zip: "50470", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Royal Strand Country Garden @ Danga Bay", street: "Danga Bay", city: "Johor Bahru", zip: "80200", state: "Johor", user: true, business: false },
  { name: "Rubica", street: "Butterworth", city: "Butterworth", zip: "12300", state: "Pulau Pinang", user: true, business: false },
  { name: "Savanna Executive Suites", street: "Southville City", city: "Bangi", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Scarletz Suites", street: "Jalan Yap Kwan Seng", city: "Kuala Lumpur", zip: "50450", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Seni Residences", street: "Mont Kiara", city: "Kuala Lumpur", zip: "50480", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sensory Residence", street: "Southville City", city: "Bangi", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Sentral Suites KL Sentral", street: "Jalan Tun Sambanthan", city: "Kuala Lumpur", zip: "50470", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sentul Point Suite", street: "Jalan Sentul Pasar", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sentul Point Suite Retails", street: "Jalan Sentul Pasar", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: false, business: true },
  { name: "Seri Topaz Puchong", street: "Taman Mas", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "Seruni", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Setia Sky 88", street: "Jalan Dato Abdullah Tahir", city: "Johor Bahru", zip: "80300", state: "Johor", user: true, business: false },
  { name: "Shang Height Residence", street: "Kepong", city: "Kuala Lumpur", zip: "52100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sierra 16", street: "Off Jalan Puchong", city: "Puchong", zip: "47120", state: "Selangor", user: true, business: false },
  { name: "Silk Residence", street: "Cheras Selatan", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: false },
  { name: "Sky Awani 2", street: "Off Jalan Sentul", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "Sky Awani 3", street: "Setapak", city: "Kuala Lumpur", zip: "53200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sky Condominium", street: "Bandar Puchong Jaya", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "Sky Meridien", street: "Sentul East", city: "Kuala Lumpur", zip: "51000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "SkyBlox @ SkySanctuary", street: "Setapak", city: "Kuala Lumpur", zip: "53200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Skypark@Cyberjaya", street: "Persiaran Garden Avenue", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Sovo @ Aurora Place Bukit Jalil", street: "Persiaran Jalil 1", city: "Bukit Jalil", zip: "57000", state: "Kuala Lumpur", user: true, business: false },
  { name: "Space Residence", street: "Jalan Terebrau", city: "Johor Bahru", zip: "80250", state: "Johor", user: true, business: false },
  { name: "Sri Carcosa", street: "Seremban 2", city: "Seremban", zip: "70300", state: "Negeri Sembilan", user: true, business: false },
  { name: "Stellar Suites", street: "Bandar Puteri Puchong", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: true },
  { name: "SummerSkye Residences", street: "Bayan Lepas", city: "Bayan Lepas", zip: "11900", state: "Pulau Pinang", user: true, business: false },
  { name: "Sunsuria Forum - Soho 2", street: "Setia Alam", city: "Shah Alam", zip: "40170", state: "Selangor", user: true, business: true },
  { name: "Sunsuria Forum Mall", street: "Setia Alam", city: "Shah Alam", zip: "40170", state: "Selangor", user: false, business: true },
  { name: "Sunsuria Forum Residential Suites", street: "Setia Alam", city: "Shah Alam", zip: "40170", state: "Selangor", user: true, business: false },
  { name: "Sunway Artessa Residences", street: "Wangsa Maju", city: "Kuala Lumpur", zip: "53300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sunway Avila Residences", street: "Wangsa Maju", city: "Kuala Lumpur", zip: "53300", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sunway Belfield", street: "Jalan Belfield", city: "Kuala Lumpur", zip: "50460", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Sunway Gandaria", street: "Seksyen 9", city: "Bangi", zip: "43650", state: "Selangor", user: true, business: false },
  { name: "Tangerine Suites", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "Temasya 8", street: "Glenmarie", city: "Shah Alam", zip: "40150", state: "Selangor", user: true, business: false },
  { name: "Teratai", street: "Bandar Bukit Raja", city: "Klang", zip: "41050", state: "Selangor", user: true, business: false },
  { name: "The Amarene", street: "Bayan Lepas", city: "Bayan Lepas", zip: "11900", state: "Pulau Pinang", user: true, business: false },
  { name: "The Annexe @ Medan Connaught", street: "Cheras", city: "Kuala Lumpur", zip: "56000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "The Apple Residence", street: "Jalan Melaka Raya", city: "Melaka", zip: "75000", state: "Melaka", user: true, business: false },
  { name: "The Arcuz @ Kelana Jaya", street: "Kelana Jaya", city: "Petaling Jaya", zip: "47301", state: "Selangor", user: true, business: false },
  { name: "The Birch", street: "Jalan Kasipillay", city: "Kuala Lumpur", zip: "51200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Cove, Ipoh Garden East @ Perak", street: "Ipoh Garden East", city: "Ipoh", zip: "31400", state: "Perak", user: true, business: false },
  { name: "The Cruise", street: "Bandar Puteri Puchong", city: "Puchong", zip: "47100", state: "Selangor", user: true, business: false },
  { name: "The Forum", street: "Setia Alam", city: "Shah Alam", zip: "40170", state: "Selangor", user: true, business: true },
  { name: "The Horizon @ Perak", street: "Ipoh", city: "Ipoh", zip: "30000", state: "Perak", user: true, business: false },
  { name: "The Leafz", street: "Sungai Besi", city: "Kuala Lumpur", zip: "57100", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Linc", street: "Jalan Tun Razak", city: "Kuala Lumpur", zip: "50400", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "The Loft @ Penang", street: "Bayan Lepas", city: "Bayan Lepas", zip: "11900", state: "Pulau Pinang", user: true, business: false },
  { name: "The Louvre @ Country Heights", street: "Country Heights", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "The Maple Residences OUG", street: "W Taman OUG", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Nest Residences", street: "Jalan Puchong", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Olive", street: "Sunsuria City", city: "Sepang", zip: "43900", state: "Selangor", user: true, business: false },
  { name: "The Pano @ Jalan Ipoh", street: "Jalan Ipoh", city: "Kuala Lumpur", zip: "51200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Petalz Residences", street: "Old Klang Road", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "The Quartz Residence", street: "Tengkera", city: "Melaka", zip: "75200", state: "Melaka", user: true, business: false },
  { name: "The Rainz", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Reach Titiwangsa", street: "Off Jalan Pahang", city: "Kuala Lumpur", zip: "53000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Rosewoodz", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "The Societe Desa Sri Hartamas", street: "Desa Sri Hartamas", city: "Kuala Lumpur", zip: "50480", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: true },
  { name: "The Stallionz @ Ipoh", street: "Jalan Sultan Nazrin Shah", city: "Ipoh", zip: "30250", state: "Perak", user: true, business: false },
  { name: "The Stone", street: "Paya Terubong", city: "Ayer Itam", zip: "11060", state: "Pulau Pinang", user: true, business: false },
  { name: "The Valley", street: "SkySierra", city: "Setiawangsa", zip: "54200", state: "Kuala Lumpur", user: true, business: false },
  { name: "The Zen", street: "Bayan Mutiara", city: "Gelugor", zip: "11700", state: "Pulau Pinang", user: true, business: false },
  { name: "The Zizz @ Damansara North", street: "Damansara Damai", city: "Petaling Jaya", zip: "47830", state: "Selangor", user: true, business: false },
  { name: "Third Avenue Cyberjaya", street: "Jalan Teknokrat 3", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Timur Perdana Kampar @ Perak", street: "Kampar", city: "Kampar", zip: "31900", state: "Perak", user: true, business: false },
  { name: "Traders Garden", street: "Cheras Selatan", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: true },
  { name: "Traders Park", street: "Cheras Selatan", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: false },
  { name: "Traders Park Retails", street: "Cheras Selatan", city: "Cheras", zip: "43200", state: "Selangor", user: false, business: true },
  { name: "Treetops Residency @ Perak", street: "Bandr Seri Botani", city: "Ipoh", zip: "31350", state: "Perak", user: true, business: false },
  { name: "Trellis Residence", street: "Johor Bahru", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: false },
  { name: "Trifolia Apartment", street: "Ampang", city: "Ampang", zip: "68000", state: "Selangor", user: true, business: false },
  { name: "Tuan 2egacy Residence", street: "Jalan Ipoh", city: "Kuala Lumpur", zip: "51200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Twin Arkz", street: "Bukit Jalil", city: "Kuala Lumpur", zip: "57000", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Twin Galaxy", street: "Jalan Dato Abdullah Tahir", city: "Johor Bahru", zip: "80300", state: "Johor", user: true, business: false },
  { name: "UOA Business Park ", street: "Glenmarie", city: "Shah Alam", zip: "40150", state: "Selangor", user: true, business: true },
  { name: "Urban Suites Penang", street: "Jelutong", city: "George Town", zip: "11600", state: "Pulau Pinang", user: true, business: false },
  { name: "VOS @ Jelutong", street: "Jelutong", city: "George Town", zip: "11600", state: "Pulau Pinang", user: true, business: false },
  { name: "Veranda Residences", street: "Jalan Tun Razak", city: "Johor Bahru", zip: "80000", state: "Johor", user: true, business: false },
  { name: "Vertex Tower @ CyberSquare", street: "Cyberjaya", city: "Cyberjaya", zip: "63000", state: "Selangor", user: true, business: false },
  { name: "Vertex Tower Retails @ CyberSquare", street: "Cyberjaya", city: "Cyberjaya", zip: "63000", state: "Selangor", user: false, business: true },
  { name: "Vierra Residence", street: "Kinrara", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Vista Sungai Ramal", street: "Sungai Ramal", city: "Kajang", zip: "43000", state: "Selangor", user: true, business: false },
  { name: "Vista Tiara", street: "Jalan Cheras", city: "Cheras", zip: "56100", state: "Kuala Lumpur", user: true, business: false },
  { name: "Vivo Executive Apartment", street: "Batu Kawan", city: "Simpang Ampat", zip: "14100", state: "Pulau Pinang", user: true, business: false },
  { name: "Waltz Residence", street: "OUG", city: "Kuala Lumpur", zip: "58200", state: "Wilayah Persekutuan Kuala Lumpur", user: true, business: false },
  { name: "Wave @ Marina Cove", street: "Marina Cove", city: "Johor Bahru", zip: "80150", state: "Johor", user: true, business: true },
  { name: "Yolo Signature Suites", street: "Bandar Sunway", city: "Subang Jaya", zip: "46150", state: "Selangor", user: true, business: false },
  { name: "Yolo Signature Suites Retails", street: "Bandar Sunway", city: "Subang Jaya", zip: "46150", state: "Selangor", user: false, business: true },
  { name: "You City 3 @ Cheras", street: "You City", city: "Cheras", zip: "43200", state: "Selangor", user: true, business: false },
  { name: "Youth City Residence @ Vision City Nilai", street: "Nilai", city: "Nilai", zip: "71800", state: "Negeri Sembilan", user: true, business: true },
  { name: "Zen 6", street: "Gelugor", city: "Gelugor", zip: "11700", state: "Pulau Pinang", user: true, business: false },
  { name: "Zentro", street: "16 Sierra", city: "Puchong South", zip: "47120", state: "Selangor", user: true, business: false },
  { name: "test", street: "Test Street", city: "Test City", zip: "12345", state: "Test State", user: true, business: true }
].map(location => ({
  ...location,
  plans: location.name === "168 Park Selayang" ? {
    RESIDENTIAL: [
      { label: "One Time Deal 300 Mbps", value: "otd_300" },
      { label: "PC 100 Mbps", value: "pc_100" },
      { label: "PC 300 Mbps", value: "pc_300" }
    ],
    BUSINESS: [
      { label: "BPC 100 Mbps", value: "bpc_100" }
    ]
  } : 
  location.name === "188 Suites" ? {
    RESIDENTIAL: [
      { label: "One Time Deal 300 Mbps", value: "otd_300" },
      { label: "One Time Deal 500 Mbps", value: "otd_500" },
      { label: "PC 100 Mbps", value: "pc_100" },
      { label: "PC 300 Mbps", value: "pc_300" },
      { label: "PC 500 Mbps", value: "pc_500" }
    ],
    BUSINESS: [
      { label: "BPC 100 Mbps", value: "bpc_100" }
    ]
  } :
  location.name === "1Medini Condominium" ? {
    RESIDENTIAL: [
      { label: "PC 100 Mbps", value: "pc_100" }
    ],
    BUSINESS: [
      { label: "BPC 100 Mbps", value: "bpc_100" }
    ]
  } : {
    RESIDENTIAL: location.user ? [
      { label: "PC 100 Mbps", value: "pc_100" },
      { label: "PC 300 Mbps", value: "pc_300" },
      { label: "PC 500 Mbps", value: "pc_500" }
    ] : [],
    BUSINESS: location.business ? [
      { label: "BPC 100 Mbps", value: "bpc_100" },
      { label: "BPC 300 Mbps", value: "bpc_300" },
      { label: "BPC 500 Mbps", value: "bpc_500" }
    ] : []
  }
}));

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
  address: Address;
  isTenant: boolean;
  installationDate: string;
  installationSession: string;
  nationality: string;
  name: string;
  nricPassport: string;
  email: string;
  mobile: string;
  termsAgreed: boolean;
  payMethod: string;
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onPrev?: () => void;
}

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    applicantType: 'RESIDENTIAL',
    plan: '',
    address: { unit: '', street: '', street2: '', city: '', zip: '', state: '', country: 'Malaysia' },
    isTenant: false,
    installationDate: '',
    installationSession: '',
    nationality: 'MALAYSIAN',
    name: '',
    nricPassport: '',
    email: '',
    mobile: '',
    termsAgreed: false,
    payMethod: 'pay_later'
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
            onChange={(e) => setFormData({...formData, plan: e.target.value})}
          >
            <option value="">--Select Internet Package--</option>
            {(() => {
              const locationData = (LOCATIONS as LocationData[]).find(l => l.name === formData.location);
              const plans = locationData?.plans[formData.applicantType as 'RESIDENTIAL' | 'BUSINESS'] || [];
              return plans.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ));
            })()}
          </select>
        </div>
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
          className="bg-[#EF4444] text-white px-20 py-4 rounded-xl font-black text-lg tracking-widest shadow-xl hover:bg-red-600 hover:scale-[1.02] transition-all"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

function Step2Details({ formData, setFormData, onNext, onPrev }: StepProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Nationality</label>
          <div className="flex gap-4">
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, nationality: 'MALAYSIAN'})}
            >
              MALAYSIAN
            </button>
            <button 
              className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${
                formData.nationality === 'NON-MALAYSIAN' ? 'bg-[#EF4444] text-white shadow-lg' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}
              onClick={() => setFormData({...formData, nationality: 'NON-MALAYSIAN'})}
            >
              NON-MALAYSIAN
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Full Name</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">NRIC / Passport</label>
          <input 
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            value={formData.nricPassport}
            onChange={(e) => setFormData({...formData, nricPassport: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Email</label>
          <input 
            type="email"
            className="w-full bg-white border-2 border-zinc-200 rounded-xl px-6 py-4 focus:border-[#EF4444] outline-none transition-all font-bold text-zinc-900 placeholder:text-zinc-300"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Primary Contact</label>
          <div className="flex bg-white border-2 border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#EF4444] transition-all">
            <div className="bg-zinc-100 flex items-center px-4 border-r-2 border-zinc-200 font-bold text-zinc-500">+60</div>
            <input 
              className="flex-1 px-6 py-4 outline-none font-bold text-zinc-900 placeholder:text-zinc-300"
              placeholder="01XXXXXXXX"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">Identity Proof (IC/Passport)</label>
          <div className="relative border-2 border-dashed border-zinc-200 rounded-xl p-8 flex flex-col items-center justify-center bg-white hover:bg-zinc-50 transition-all cursor-pointer">
            <svg className="w-8 h-8 text-[#EF4444] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Upload Document</span>
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
          </div>
          <p className="mt-2 text-[10px] text-zinc-400 font-bold text-center italic">*Support a single file only (PDF, JPG, PNG)</p>
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col items-center gap-8 mt-12">
        <label className="flex items-center gap-4 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-6 h-6 rounded-md border-2 border-zinc-200 text-[#EF4444] focus:ring-[#EF4444]"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({...formData, termsAgreed: e.target.checked})}
          />
          <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-900 transition-all">
            I read and agree with the <a href="#" className="text-[#EF4444] underline uppercase tracking-widest text-xs">Terms & Conditions</a>
          </span>
        </label>
        <div className="flex gap-4 w-full justify-center">
          <button onClick={onPrev} className="flex-1 max-w-[200px] border-2 border-zinc-200 py-4 rounded-xl font-black text-zinc-400 hover:bg-white transition-all">PREV</button>
          <button onClick={onNext} className="flex-1 max-w-[200px] bg-[#EF4444] text-white py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-all">NEXT</button>
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
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-4">
          Your Subscription Fee is{' '}
          <span className="text-[#00a1e1]">RM69</span> / Month
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
          <Section title="Plan Selected" value={formData.plan ? formData.plan.toUpperCase() : '-'} />
          <Section title="Applicant Type" value={formData.applicantType} />
          <Section title="NRIC / Passport" value={formData.nricPassport || '-'} />
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
             <span className="font-black text-zinc-900">RM 69.00</span>
           </div>
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
             <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">SST (6%)</span>
             <span className="font-black text-zinc-900">RM 0.00</span>
           </div>
           <div className="flex justify-between items-center pt-4">
             <span className="font-black text-zinc-900 text-lg uppercase tracking-widest">Total</span>
             <span className="font-black text-[#EF4444] text-3xl">RM 69.00</span>
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

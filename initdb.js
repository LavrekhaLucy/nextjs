import sql from "better-sqlite3";

const db = sql('cars.db');

const carsAPI =
    [

        {
            "id": 14561,
            "brand": "hil",
            "price": 22222,
            "year": 2002
        },
        {
            "id": 14562,
            "brand": "Mersedes",
            "price": 15000,
            "year": 2015
        },
        {
            "id": 14563,
            "brand": "Skoda",
            "price": 3700,
            "year": 2005
        },
        {
            "id": 14564,
            "brand": "BMW",
            "price": 5120,
            "year": 2011
        },
        {
            "id": 14565,
            "brand": "BRABUS",
            "price": 99111,
            "year": 2023
        },
        {
            "id": 14566,
            "brand": "ISUZU",
            "price": 98777,
            "year": 2022
        },
        {
            "id": 14567,
            "brand": "LEXUS",
            "price": 99999,
            "year": 2020
        },
        {
            "id": 14568,
            "brand": "CITROEN",
            "price": 875,
            "year": 1991
        },
        {
            "id": 14572,
            "brand": "ZAZ",
            "price": 1200,
            "year": 1996
        },
        {
            "id": 14573,
            "brand": "MAZDA",
            "price": 2500,
            "year": 2001
        },
        {
            "id": 14576,
            "brand": "Skoda",
            "price": 100000,
            "year": 2003
        },
        {
            "id": 14577,
            "brand": "Audi",
            "price": 2566,
            "year": 2000
        },
        {
            "id": 14578,
            "brand": "Mersedes",
            "price": 1000,
            "year": 2005
        },
        {
            "id": 14579,
            "brand": "uu",
            "price": 4000,
            "year": 2015
        },
        {
            "id": 14580,
            "brand": "Skoda",
            "price": 3333,
            "year": 2000
        },
        {
            "id": 14581,
            "brand": "yy",
            "price": 7000,
            "year": 2015
        },
        {
            "id": 14582,
            "brand": "Fabia",
            "price": 3500,
            "year": 2003
        },
        {
            "id": 14583,
            "brand": "Shkoda",
            "price": 1000,
            "year": 2000
        },
        {
            "id": 14584,
            "brand": "ww",
            "price": 1500,
            "year": 2013
        },
        {
            "id": 14585,
            "brand": "Mersedes",
            "price": 500,
            "year": 2000
        },
        {
            "id": 14586,
            "brand": "Bmv",
            "price": 145567,
            "year": 2012
        },
        {
            "id": 14587,
            "brand": "Bmv",
            "price": 145567,
            "year": 2012
        },
        {
            "id": 14588,
            "brand": "Lonos",
            "price": 300,
            "year": 2012
        },
        {
            "id": 14589,
            "brand": "Lonos",
            "price": 300,
            "year": 2012
        },
        {
            "id": 14590,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14591,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14592,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14593,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14594,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14595,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14596,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14597,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14598,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14599,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14600,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14601,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14602,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14603,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14604,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14605,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14606,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14607,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14608,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14609,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14610,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14611,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14612,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14613,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14614,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14615,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14616,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14617,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14618,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14619,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14620,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14621,
            "brand": "Toyota",
            "price": 25000,
            "year": 2020
        },
        {
            "id": 14622,
            "brand": "BMW",
            "price": 45000,
            "year": 2019
        },
        {
            "id": 14623,
            "brand": "Ford",
            "price": 15000,
            "year": 2018
        },
        {
            "id": 14624,
            "brand": "Mercedes",
            "price": 60000,
            "year": 2021
        },
        {
            "id": 14625,
            "brand": "Audi",
            "price": 35000,
            "year": 2022
        },
        {
            "id": 14626,
            "brand": "Honda",
            "price": 22000,
            "year": 2021
        },
        {
            "id": 14627,
            "brand": "Nissan",
            "price": 32000,
            "year": 2020
        },
        {
            "id": 14628,
            "brand": "Chevrolet",
            "price": 18000,
            "year": 2017
        },
        {
            "id": 14629,
            "brand": "BMW",
            "price": 55000,
            "year": 2023
        },
        {
            "id": 14630,
            "brand": "Volkswagen",
            "price": 40000,
            "year": 2022
        },
        {
            "id": 14631,
            "brand": "Honda",
            "price": 22000,
            "year": 2021
        },
        {
            "id": 14632,
            "brand": "Chevrolet",
            "price": 18000,
            "year": 2017
        },
        {
            "id": 14633,
            "brand": "Nissan",
            "price": 32000,
            "year": 2020
        },
        {
            "id": 14634,
            "brand": "BMW",
            "price": 55000,
            "year": 2023
        },
        {
            "id": 14635,
            "brand": "Volkswagen",
            "price": 40000,
            "year": 2022
        },
        {
            "id": 14636,
            "brand": "Honda",
            "price": 22000,
            "year": 2021
        },
        {
            "id": 14637,
            "brand": "Nissan",
            "price": 32000,
            "year": 2020
        },
        {
            "id": 14638,
            "brand": "BMW",
            "price": 55000,
            "year": 2023
        },
        {
            "id": 14639,
            "brand": "Chevrolet",
            "price": 18000,
            "year": 2017
        },
        {
            "id": 14640,
            "brand": "Volkswagen",
            "price": 40000,
            "year": 2022
        },
        {
            "id": 14641,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 14642,
            "brand": "Audi",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14643,
            "brand": "Audi",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14644,
            "brand": "Mersedes",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14645,
            "brand": "Skoda",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14646,
            "brand": "Mersedes",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14647,
            "brand": "Audi",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14648,
            "brand": "Mersedes",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14649,
            "brand": "Zaz",
            "price": 1000,
            "year": 1995
        },
        {
            "id": 14650,
            "brand": "Skoda",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14651,
            "brand": "Mersedes",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14652,
            "brand": "ааа",
            "price": 1000,
            "year": 1990
        },
        {
            "id": 14653,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14654,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14655,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14656,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14657,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14658,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14659,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14660,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14661,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14662,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14663,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14664,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14665,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14666,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14667,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14668,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14669,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14670,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14671,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14672,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14673,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14674,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14675,
            "brand": "ппппп",
            "price": 6543,
            "year": 1999
        },
        {
            "id": 14676,
            "brand": "аааа",
            "price": 2000,
            "year": 1999
        },
        {
            "id": 14677,
            "brand": "аааа",
            "price": 2000,
            "year": 1999
        },
        {
            "id": 14678,
            "brand": "njnjn",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 14679,
            "brand": "qwerrtt",
            "price": 1933,
            "year": 2007
        },
        {
            "id": 14680,
            "brand": "volga",
            "price": 2345,
            "year": 2000
        },
        {
            "id": 14681,
            "brand": "Jeep",
            "price": 100000,
            "year": 2020
        },
        {
            "id": 14682,
            "brand": "икфтв",
            "price": 2000,
            "year": 1999
        },
        {
            "id": 14683,
            "brand": "brand",
            "price": 200,
            "year": 2000
        },
        {
            "id": 14684,
            "brand": "Lamborghini",
            "price": 19349,
            "year": 2021
        },
        {
            "id": 14685,
            "brand": "Honda",
            "price": 19903,
            "year": 2021
        },
        {
            "id": 14686,
            "brand": "BMW",
            "price": 122345,
            "year": 2020
        },
        {
            "id": 14687,
            "brand": "asd",
            "price": 222,
            "year": 2024
        },
        {
            "id": 14688,
            "brand": "asd",
            "price": 222,
            "year": 2024
        },
        {
            "id": 14689,
            "brand": "asd",
            "price": 222,
            "year": 2024
        },
        {
            "id": 14690,
            "brand": "asd",
            "price": 22,
            "year": 1995
        },
        {
            "id": 14691,
            "brand": "asd",
            "price": 22,
            "year": 1995
        },
        {
            "id": 14692,
            "brand": "asd",
            "price": 22,
            "year": 1995
        },
        {
            "id": 14693,
            "brand": "asd",
            "price": 22,
            "year": 1995
        },
        {
            "id": 14694,
            "brand": "asd",
            "price": 222,
            "year": 1990
        },
        {
            "id": 14695,
            "brand": "asd",
            "price": 222,
            "year": 1995
        },
        {
            "id": 14696,
            "brand": "asdsany",
            "price": 222,
            "year": 1999
        },
        {
            "id": 14697,
            "brand": "asdsany",
            "price": 222,
            "year": 1999
        },
        {
            "id": 14698,
            "brand": "jaguar",
            "price": 4000,
            "year": 2023
        },
        {
            "id": 14699,
            "brand": "BMW",
            "price": 3200,
            "year": 1990
        },
        {
            "id": 14700,
            "brand": "mercedes",
            "price": 30000,
            "year": 2020
        },
        {
            "id": 14702,
            "brand": "BMW",
            "price": 2000,
            "year": 2020
        },
        {
            "id": 14703,
            "brand": "BMW",
            "price": 12,
            "year": 2022
        },
        {
            "id": 14704,
            "brand": "Mazda",
            "price": 20000,
            "year": 2022
        },
        {
            "id": 14705,
            "brand": "Mazda",
            "price": 20000,
            "year": 2022
        },
        {
            "id": 14706,
            "brand": "Mazda",
            "price": 20000,
            "year": 2022
        },
        {
            "id": 14707,
            "brand": "Volkswagen",
            "price": 22000,
            "year": 2022
        },
        {
            "id": 14708,
            "brand": "Toyota",
            "price": 100000,
            "year": 2020
        },
        {
            "id": 14709,
            "brand": "Infinity",
            "price": 50000,
            "year": 2015
        },
        {
            "id": 14710,
            "brand": "Infinity",
            "price": 50000,
            "year": 2015
        },
        {
            "id": 14713,
            "brand": "audi",
            "price": 200001,
            "year": 2021
        },
        {
            "id": 14718,
            "brand": "Reng",
            "price": 111122,
            "year": 2020
        },
        {
            "id": 14734,
            "brand": "BMW",
            "price": 10000,
            "year": 2024
        },
        {
            "id": 14735,
            "brand": "BMW",
            "price": 10000,
            "year": 2024
        },
        {
            "id": 14736,
            "brand": "BMW",
            "price": 10000,
            "year": 2024
        },
        {
            "id": 14737,
            "brand": "BMW",
            "price": 10000,
            "year": 2024
        },
        {
            "id": 14738,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14739,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14740,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14741,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14742,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14743,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14744,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14745,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14746,
            "brand": "AudiRS",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14747,
            "brand": "Infinity",
            "price": 20000,
            "year": 2024
        },
        {
            "id": 14748,
            "brand": "audis",
            "price": 13000,
            "year": 2024
        },
        {
            "id": 14749,
            "brand": "Porshe",
            "price": 100000,
            "year": 2023
        },
        {
            "id": 14750,
            "brand": "Porshe",
            "price": 100000,
            "year": 2023
        },
        {
            "id": 14751,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14752,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14753,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14754,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14755,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14756,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14757,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14758,
            "brand": "Jaguar",
            "price": 250000,
            "year": 2005
        },
        {
            "id": 14759,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 14761,
            "brand": "Civic",
            "price": 6000,
            "year": 2008
        },
        {
            "id": 14762,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14763,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14764,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14765,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14766,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14767,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14768,
            "brand": "HondaCivik",
            "price": 123,
            "year": 1995
        },
        {
            "id": 14769,
            "brand": "Dodge",
            "price": 16000,
            "year": 2016
        },
        {
            "id": 14770,
            "brand": "Камаз",
            "price": 1660,
            "year": 1998
        },
        {
            "id": 14771,
            "brand": "Bogdan",
            "price": 3500,
            "year": 2002
        },
        {
            "id": 14772,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 14773,
            "brand": "Volkswagen",
            "price": 12000,
            "year": 2020
        },
        {
            "id": 14774,
            "brand": "Volkswagen",
            "price": 12000,
            "year": 2020
        },
        {
            "id": 14775,
            "brand": "Volkswagen",
            "price": 12000,
            "year": 2020
        },
        {
            "id": 14776,
            "brand": "KIA",
            "price": 16500,
            "year": 2022
        },
        {
            "id": 14777,
            "brand": "Toyota",
            "price": 12123,
            "year": 2024
        },
        {
            "id": 14778,
            "brand": "Infinity",
            "price": 25000,
            "year": 2018
        },
        {
            "id": 14779,
            "brand": "Volkswagen",
            "price": 12000,
            "year": 2020
        },
        {
            "id": 14780,
            "brand": "Volkswagen",
            "price": 25000,
            "year": 2024
        },
        {
            "id": 14781,
            "brand": "Volkswagen",
            "price": 25000,
            "year": 2024
        },
        {
            "id": 14782,
            "brand": "KIA",
            "price": 16500,
            "year": 2020
        },
        {
            "id": 14783,
            "brand": "Toyota",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14784,
            "brand": "BMW",
            "price": 120000,
            "year": 2024
        },
        {
            "id": 14787,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14843,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14891,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14924,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14927,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14935,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14942,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14992,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 14999,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15145,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15333,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15496,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15502,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15555,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15566,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15593,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 15743,
            "brand": "Deawoo",
            "price": 22222,
            "year": 2011
        },
        {
            "id": 19749,
            "brand": "Citroen",
            "price": 3,
            "year": 2011
        },
        {
            "id": 19750,
            "brand": "Ford",
            "price": 200000,
            "year": 2021
        },
        {
            "id": 19751,
            "brand": "Volvo",
            "price": 40000,
            "year": 1994
        },
        {
            "id": 19752,
            "brand": "Citroen",
            "price": 23123,
            "year": 2022
        },
        {
            "id": 19753,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 19754,
            "brand": "gwen",
            "price": 0,
            "year": 2020
        },
        {
            "id": 19755,
            "brand": "Toyota",
            "price": 1000,
            "year": 2024
        },
        {
            "id": 19756,
            "brand": "P",
            "price": 0,
            "year": 2000
        },
        {
            "id": 19757,
            "brand": "Porshe",
            "price": 2,
            "year": 2000
        },
        {
            "id": 19758,
            "brand": "retdfg",
            "price": 10000,
            "year": 2022
        },
        {
            "id": 19759,
            "brand": "retdfg",
            "price": 10000,
            "year": 2022
        },
        {
            "id": 19760,
            "brand": "sad",
            "price": 20,
            "year": 2022
        },
        {
            "id": 19761,
            "brand": "Mycar",
            "price": 199,
            "year": 2024
        },
        {
            "id": 19762,
            "brand": "ada",
            "price": 20,
            "year": 1990
        },
        {
            "id": 19763,
            "brand": "Audi",
            "price": 200011,
            "year": 2018
        },
        {
            "id": 19764,
            "brand": "MYcaras",
            "price": 1998,
            "year": 2022
        },
        {
            "id": 19765,
            "brand": "sad",
            "price": 200,
            "year": 2019
        },
        {
            "id": 19766,
            "brand": "Mycar",
            "price": 200,
            "year": 2011
        },
        {
            "id": 19767,
            "brand": "Audi",
            "price": 1000,
            "year": 1998
        },
        {
            "id": 19768,
            "brand": "Nissan",
            "price": 20000,
            "year": 2024
        },
        {
            "id": 19769,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 19770,
            "brand": "TeslaCybertruck",
            "price": 115735,
            "year": 2024
        },
        {
            "id": 19771,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19772,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19773,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19774,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19775,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19776,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19777,
            "brand": "saas",
            "price": 121212,
            "year": 2000
        },
        {
            "id": 19778,
            "brand": "saasas",
            "price": 2121,
            "year": 2000
        },
        {
            "id": 19779,
            "brand": "asassa",
            "price": 1212,
            "year": 2000
        },
        {
            "id": 19780,
            "brand": "asdasdasd",
            "price": 211221,
            "year": 2000
        },
        {
            "id": 19781,
            "brand": "asdasdasd",
            "price": 211221,
            "year": 2000
        },
        {
            "id": 19782,
            "brand": "asdasdasd",
            "price": 211221,
            "year": 2000
        },
        {
            "id": 19783,
            "brand": "asdasdasd",
            "price": 211221,
            "year": 2000
        },
        {
            "id": 19784,
            "brand": "asdasdasd",
            "price": 211221,
            "year": 2000
        },
        {
            "id": 19785,
            "brand": "assas",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19786,
            "brand": "assas",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19787,
            "brand": "assas",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19788,
            "brand": "assas",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19789,
            "brand": "assas",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19790,
            "brand": "assass",
            "price": 2222,
            "year": 2000
        },
        {
            "id": 19791,
            "brand": "Nissan",
            "price": 20000,
            "year": 2021
        },
        {
            "id": 19792,
            "brand": "hil",
            "price": 22222,
            "year": 2002
        },
        {
            "id": 19793,
            "brand": "www",
            "price": 22222,
            "year": 2021
        },
        {
            "id": 19794,
            "brand": "hil",
            "price": 20000,
            "year": 2022
        },
        {
            "id": 19795,
            "brand": "hil",
            "price": 2220,
            "year": 2000
        },
        {
            "id": 19796,
            "brand": "hil",
            "price": 2000,
            "year": 2001
        },
        {
            "id": 19797,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 19798,
            "brand": "Mazda",
            "price": 20000,
            "year": 2022
        },
        {
            "id": 19799,
            "brand": "Mazda",
            "price": 21000,
            "year": 2023
        },
        {
            "id": 19800,
            "brand": "Nissan",
            "price": 30000,
            "year": 2024
        },
        {
            "id": 19801,
            "brand": "BMW",
            "price": 20000,
            "year": 2024
        },
        {
            "id": 19802,
            "brand": "BMW",
            "price": 30000,
            "year": 2023
        },
        {
            "id": 19803,
            "brand": "audi",
            "price": 20000,
            "year": 2020
        },
        {
            "id": 19804,
            "brand": "audi",
            "price": 20000,
            "year": 2020
        },
        {
            "id": 19805,
            "brand": "audi",
            "price": 20000,
            "year": 2020
        },
        {
            "id": 19807,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19808,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19809,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19810,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19811,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19812,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19813,
            "brand": "Toyota",
            "price": 2600,
            "year": 1992
        },
        {
            "id": 19814,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19815,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19816,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19817,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19818,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19819,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19820,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19821,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19822,
            "brand": "Acss",
            "price": 21121,
            "year": 1990
        },
        {
            "id": 19823,
            "brand": "BMW",
            "price": 30000,
            "year": 2020
        },
        {
            "id": 19824,
            "brand": "Citroen",
            "price": 15000,
            "year": 2014
        },
        {
            "id": 19829,
            "brand": "Toyota",
            "price": 5555,
            "year": 2022
        },
        {
            "id": 19830,
            "brand": "Toyota",
            "price": 11111,
            "year": 2023
        },
        {
            "id": 19831,
            "brand": "Toyota",
            "price": 33333,
            "year": 2023
        },
        {
            "id": 19832,
            "brand": "Toyota",
            "price": 455678,
            "year": 2000
        },
        {
            "id": 19833,
            "brand": "Mazda",
            "price": 20000,
            "year": 2024
        },
        {
            "id": 19834,
            "brand": "Audi",
            "price": 13000,
            "year": 2010
        },
        {
            "id": 19835,
            "brand": "BMW",
            "price": 15000,
            "year": 2015
        },
        {
            "id": 19836,
            "brand": "Hyundai",
            "price": 12000,
            "year": 2008
        },
        {
            "id": 19837,
            "brand": "Nissan",
            "price": 20000,
            "year": 2024
        },
        {
            "id": 19838,
            "brand": "Skoda",
            "price": 7000,
            "year": 2017
        },
        {
            "id": 19839,
            "brand": "Skoda",
            "price": 7000,
            "year": 2017
        },
        {
            "id": 19840,
            "brand": "Skoda",
            "price": 7000,
            "year": 2017
        },
        {
            "id": 19841,
            "brand": "Skoda",
            "price": 7000,
            "year": 2017
        },
        {
            "id": 19842,
            "brand": "Skoda",
            "price": 8000,
            "year": 2018
        },
        {
            "id": 19843,
            "brand": "Skoda",
            "price": 8000,
            "year": 2018
        },
        {
            "id": 19844,
            "brand": "Toyota",
            "price": 222,
            "year": 2020
        },
        {
            "id": 19845,
            "brand": "Toyota",
            "price": 2440,
            "year": 2020
        },
        {
            "id": 19846,
            "brand": "Skoda",
            "price": 7000,
            "year": 2017
        },
        {
            "id": 19847,
            "brand": "Volkswagen",
            "price": 12000,
            "year": 2020
        },
        {
            "id": 19848,
            "brand": "SkodaKodiaq",
            "price": 48000,
            "year": 2024
        },
        {
            "id": 19849,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19850,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19851,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19852,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19853,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19854,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19855,
            "brand": "huuuu",
            "price": 1999,
            "year": 2004
        },
        {
            "id": 19856,
            "brand": "вввввввв",
            "price": 1209,
            "year": 2020
        },
        {
            "id": 19857,
            "brand": "ddd",
            "price": 23,
            "year": 2023
        },
        {
            "id": 19858,
            "brand": "ddd",
            "price": 2,
            "year": 2023
        },
        {
            "id": 19859,
            "brand": "ddd",
            "price": 2,
            "year": 2023
        },
        {
            "id": 19860,
            "brand": "ddd",
            "price": 2,
            "year": 2023
        },
        {
            "id": 19861,
            "brand": "huuuu",
            "price": 3,
            "year": 2023
        },
        {
            "id": 19862,
            "brand": "huuuu",
            "price": 3,
            "year": 2023
        },
        {
            "id": 19863,
            "brand": "huuuu",
            "price": 2,
            "year": 2022
        },
        {
            "id": 19864,
            "brand": "dodge",
            "price": 1243,
            "year": 2000
        },
        {
            "id": 19865,
            "brand": "Nissan",
            "price": 20000,
            "year": 2023
        },
        {
            "id": 19866,
            "brand": "dsfs",
            "price": 324,
            "year": 1998
        },
        {
            "id": 19867,
            "brand": "test",
            "price": 20000,
            "year": 2000
        },
        {
            "id": 19868,
            "brand": "Starship",
            "price": 10000,
            "year": 2020
        },
        {
            "id": 19869,
            "brand": "TeslaModelX",
            "price": 150000,
            "year": 2024
        },
        {
            "id": 19870,
            "brand": "SpaceXFalconHeavy",
            "price": 300000,
            "year": 2018
        },
        {
            "id": 19871,
            "brand": "bmw",
            "price": 10000,
            "year": 2015
        },
        {
            "id": 19872,
            "brand": "s",
            "price": 22222,
            "year": 2006
        },
        {
            "id": 19873,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        },
        {
            "id": 19874,
            "brand": "wertyu",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19875,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19876,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19877,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19878,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19879,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19880,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19881,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19882,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19883,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19884,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19885,
            "brand": "hhhhhh",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19886,
            "brand": "lllllll",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19887,
            "brand": "lllllll",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19888,
            "brand": "аааа",
            "price": 2000,
            "year": 2000
        },
        {
            "id": 19889,
            "brand": "string",
            "price": 1000000,
            "year": 2024
        }
];


db.prepare(`
    CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
             brand TEXT,
             price TEXT,
             year TEXT
    )
`).run();


async function initData() {
    const stmt = db.prepare(`
        INSERT INTO cars (id,brand, price, year)
        VALUES (null,@brand, @price, @year)
    `);

    for (const cars of carsAPI) {
        stmt.run(cars);
    }

}

initData();


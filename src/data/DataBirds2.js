const birdsData = [
    [
{
    predatorsBirds: [
      {
        ruName: "Белоголовый Сип",
        engName: "Gyps fulvus",
        info: "Сип является крупным грифом с длинными широкими крыльями и хвостом. Длина тела птицы от 93 до 110 см, размах крыльев составляет 234-269 см.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eagle_beak_sideview_A.jpg/275px-Eagle_beak_sideview_A.jpg"
      },
      {
        ruName: "Сипуха",
        engName: "Tyto",
        info: "Хищная птица семейства сипуховых, наиболее распространённая в мире птица из рода сипух. Встречается практически на всех континентах, за исключением Антарктиды. На территории России встречается лишь в Калининградской области.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tyto_alba_tylluan_wen_detail.jpg/275px-Tyto_alba_tylluan_wen_detail.jpg"
      },
      {
        ruName: "Беркут",
        engName: "Aquila chrysaetos",
        info: "Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Распространён в Северном полушарии, где обитает преимущественно в горах, в меньшей степени на равнинных открытых и полуоткрытых ландшафтах.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg/275px-%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg"
      },
      {
        ruName: "Лунь",
        engName: "Circus aeruginosus",
        info: "Подсемейство хищных птиц семейства ястребиных. Представители данного подсемейства распространены на всех континентах. Обитают на открытых пространствах — степях, лугах, болотах и сельскохозяйственных угодиях.",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Monties.jpg"
      },
      {
        ruName: "Бородач",
        engName: "Gypaetus barbatus",
        info: "Птица из семейства ястребиных, единственный вид в роде бородачи (Gypaetus).",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg/273px-Bartgeier_Gypaetus_barbatus_front_Richard_Bartz.jpg"
      },
      {
        ruName: "Змееяд",
        engName: "Circaetus gallicus",
        info: "Хищная птица семейства ястребиных, отряд ястребообразные, подсемейства змееяды.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circaetus_gallicus_02.JPG/275px-Circaetus_gallicus_02.JPG"
      },
      {
        ruName: "Кобчик",
        engName: "Falco vespertinus",
        info: "Вид хищных птиц рода соколов.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg/275px-Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg"
      },
      {
        ruName: "Коршун",
        engName: "Elanus caeruleus",
        info: "Ко́ршуны (лат. Milvinae) — подсемейство ястребиных.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Milvus_migrans_2005-new.jpg/275px-Milvus_migrans_2005-new.jpg"
      },
      {
        ruName: "Подорлик",
        engName: "Clanga pomarina",
        info: "Большой подорлик (лат. Clanga clanga) — птица семейства ястребиных.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aquila_pomarina_orlik_krzykliwyAM.jpg/275px-Aquila_pomarina_orlik_krzykliwyAM.jpg"
      },
      {
        ruName: "Конёк",
        engName: "Anthus trivialis",
        info: "Коньки́ (лат. Anthus, от др.-греч. ἄνθος, предполож. трясогузка или овсянка) — род птиц семейства трясогузковых, объединяющий около 40 видов мелких птиц, распространённых как в восточном, так и западном полушарии.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Anthus_triviallis_%28Marek_Szczepanek%29.jpg/120px-Anthus_triviallis_%28Marek_Szczepanek%29.jpg"
      },
      {
        "ruName": "Канюк",
        "engName": "Buteo buteo",
        "info": "Род хищных птиц семейства ястребиных. Отличаются средним размером, сильным телом и широкими крыльями. Широко распространены в обоих полушариях.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Buteo_buteo_4_%28Marek_Szczepanek%29.jpg/275px-Buteo_buteo_4_%28Marek_Szczepanek%29.jpg"
      },
      {
        "ruName": "Пустельга",
        "engName": "Falco tinnunculus",
        "info": "Пустельга́ — название нескольких видов птиц рода Соколы (лат. Falco). Насчитывается более десяти видов, из которых в России обитают два вида: обыкновенная пустельга и степная пустельга, последняя занесена в Красную книгу России как исчезающий вид.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Common_Kestrel_1.jpg/265px-Common_Kestrel_1.jpg"
      },
      {
        "ruName": "Сапсан",
        "engName": "Falco peregrinus",
        "info": "Хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами».",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Falco_peregrinus_-_01.jpg/275px-Falco_peregrinus_-_01.jpg"
      },
      {
        "ruName": "Ястребиная Славка",
        "engName": "Sylvia nisoria",
        "info": "Одна из самых крупных славок, её длина достигает 18 см; вес — 28—32 г. Верхняя часть тела оливково-бурая с серым оттенком, верх головы несколько темнее.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sylvia_nisoria.jpg/275px-Sylvia_nisoria.jpg"
      }
    ],
  
    "forestBirds" : [
      {
        "ruName": "Дрозд",
        "engName": "Turdus merula",
        "info": "Распространены в Европе, Азии и Америке; завезены в Новую Зеландию. На зиму северные виды улетают на юг, собираясь большими стаями.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blackbird_%28male%29.jpg/120px-Blackbird_%28male%29.jpg"
      },
      {
        "ruName": "Дятел",
        "engName": "Dendrocopos major",
        "info": "Пёстрые дятлы[1][2], или дя́тлы[3] (лат. Dendrocopos) — род птиц семейства дятловых, распространённых в Евразии и Северной Африке. Помимо собственно рода Dendrocopos, дятлами также называют и других представителей семейства.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Buntspecht_Dendrocopos_major.jpg/260px-Buntspecht_Dendrocopos_major.jpg"
      },
      {
        "ruName": "Сычик",
        "engName": "Glaucidium passerinum",
        "info": "Воробьиный сыч — очень маленькая сова, как и все представители рода воробьиных сычей. Длина его тела составляет 15—19 см, размах крыльев — 35—40 см, длина крыла — 9—11 см, вес — 55—80 г. Самки крупнее самцов. ",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/V%C3%A4rbkakk.JPG/275px-V%C3%A4rbkakk.JPG"
      },
      {
        "ruName": "Синица",
        "engName": "Parus major",
        "info": "Синицы, или настоящие синицы (лат. Parus) — род птиц семейства синицевых. Обычный представитель рода — большая синица (Parus major) широко распространена на территории России",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parus_major_-_2013%2703%2730-16h47m21s.jpg/240px-Parus_major_-_2013%2703%2730-16h47m21s.jpg"
      },
      {
        "ruName": "Неясыть",
        "engName": "Strix aluco",
        "info": "Длина тела от 30 до 70 см. Перьевые ушки отсутствуют, лицевой диск хорошо выражен, ушные отверстия большие, асимметричные и почти полностью прикрыты складкой кожи. Клюв высокий, сжатый с боков. Оперение рыхлое, обычно сероватое, или рыжеватое, с бурыми пестринами. Радужина бурого цвета.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tawny_wiki.jpg/120px-Tawny_wiki.jpg"
      },
      {
        "ruName": "Клёст",
        "engName": "Loxia curvirostra",
        "info": "Клесты́, ед. ч. клёст (лат. Loxia) — род птиц семейства вьюрковых (Fringillidae), отряда воробьинообразных (Passeriformes). Обитают в лесах Северного полушария, питаются главным образом семенами хвойных растений. Могут гнездоваться летом и зимой.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Red_Crossbills_%28Male%29.jpg/275px-Red_Crossbills_%28Male%29.jpg"
      },
      {
        "ruName": "Сойка",
        "engName": "Garrulus glandarius",
        "info": "Слово сойка — уменьшительная форма от древнерусского названия этой птицы «соя». Предполагается, что название родственно глаголу «сиять» и дано птице за яркое оперение.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Garrulus_glandarius_B_Luc_Viatour.jpg/275px-Garrulus_glandarius_B_Luc_Viatour.jpg"
      },
      {
        "ruName": "Кукушка",
        "engName": "Cuculus canorus",
        "info": "Куку́шковые, или куку́шки (лат. Cuculidae) — семейство из отряда кукушкообразных птиц, близких к воробьинообразным. Самый известный представитель семейства — обыкновенная кукушка.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Roadrunner_DeathValley.jpg/275px-Roadrunner_DeathValley.jpg"
      },
      {
        "ruName": "Рябчик",
        "engName": "Tetrastes bonasia",
        "info": "Ря́бчик (лат. Bonasa bonasia) — птица из рода рябчиков, подсемейства тетеревиных, семейства фазановых отряда курообразных. Широко распространённый вид, обитающий практически повсеместно в лесной и таёжной зоне Евразии, от Западной Европы до Кореи. Рябчик — самый мелкий представитель тетеревиных. Масса тела даже самых крупных особей редко превышает 500 граммов. ",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Haselhuhn-01.jpg/275px-Haselhuhn-01.jpg"
      },
      {
        "ruName": "Глухарь",
        "engName": "Tetrao urogallus",
        "info": "Глуха́рь (лат. Tetrao urogallus) — крупная птица из семейства фазановых, отряда курообразных. Названием «глухарь» птица обязана известной особенности токующего в брачный период самца утрачивать чуткость и бдительность, чем часто пользуются охотники.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Capercaillie_%288751340764%29.jpg/275px-Capercaillie_%288751340764%29.jpg"
      },
      {
        "ruName": "Тетерев",
        "engName": "Lyrurus tetrix",
        "info": "Те́терев, или те́терев-коса́ч, или полево́й те́терев (лат. Lyrurus tetrix), — распространённая птица семейства фазановых, обитающая в лесной, лесостепной и частично степной зоне Евразии, в том числе и на территории России.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Black_Grouse_Nationalpark_Bayerischer_Wald.jpg/240px-Black_Grouse_Nationalpark_Bayerischer_Wald.jpg"
      },
      {
        "ruName": "Куропатка",
        "engName": "Perdix perdix",
        "info": "Куропа́тки (лат. Perdix) — род подсемейства куропатковых (лат. Perdicinae), семейства фазановых. Являются объектом спортивной и промысловой охоты. К роду относятся три вида.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Perdix_perdix_%28Marek_Szczepanek%29.jpg/275px-Perdix_perdix_%28Marek_Szczepanek%29.jpg"
      },
      {
        "ruName": "Гагара",
        "engName": "Gavia stellata",
        "info": "Гага́ры (лат. Gavia) — род водоплавающих птиц, относящихся к монотипичному в настоящее время отряду гагарообразных (Gaviiformes) и обитающих на севере Европы, Азии и Америки. Представляют собой компактную группу близкородственных видов, заметно выделяющуюся среди остальных птиц.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gavia_arctica1.jpg/120px-Gavia_arctica1.jpg"
      },
      {
        "ruName": "Баклан",
        "engName": "Phalacrocorax carbo",
        "info": "Бакла́ны (лат. Phalacrocorax) — род морских птиц семейства баклановых[2].Широко распространены по всему миру с большим биологическим разнообразием в тропическом и умеренном климате. Обитают на морских побережьях континентов и островов, а также по берегам рек, озёр, на заболоченных территориях.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Phalacrocorax_pelagicus.jpg/120px-Phalacrocorax_pelagicus.jpg"
      }
    ],
    "otherBirds": [
      {
        "ruName": "Снегирь",
        "engName": "Pyrrhula pyrrhula",
        "info": "Птица мелких размеров, чуть больше воробья. Голова сверху, вокруг клюва и глаз — чёрная. Маховые и рулевые перья тоже чёрные, с синим металлическим отливом. Поясница и подхвостье — белые. Спина, плечи и зашеек у самца серые.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bullfinch_side-on.jpg/240px-Bullfinch_side-on.jpg"
      },
      {
        "ruName": "Аист",
        "engName": "Ciconia ciconia",
        "info": "Для аистов характерны длинные обнажённые ноги, покрытые сетчатой кожей; клюв длинный, прямой, конический; передние пальцы соединены между собой широкой плавательной перепонкой, пальцы короткие с розоватыми когтями; на голове и шее местами голая кожа.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ciconia_Diversity.jpg/275px-Ciconia_Diversity.jpg"
      },
      {
        "ruName": "Цапля",
        "engName": "Ardea cinerea",
        "info": "Ца́плевые (лат. Ardeidae) — семейство птиц отряда пеликанообразных. В целом семейство имеет ряд общих признаков, но классификация отдельных видов до сих пор затруднена и находится на стадии пересмотра. Выделение цапель в отдельный отряд цаплеобразные (Ardeiformes) не является общепризнанным.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ardea_cinerea.jpg/275px-Ardea_cinerea.jpg"
      },
      {
        "ruName": "Соловей",
        "engName": "Luscinia luscinia",
        "info": "Соловьи́, соловьи́ные (лат. Luscinia) — род птиц из отряда воробьинообразных. В зависимости от подхода к классификации относится либо к семейству дроздовых (Turdidae), либо к семейству мухоловковых (Muscicapidae).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Luscinia_megarhynchos_Istria_01.jpg/200px-Luscinia_megarhynchos_Istria_01.jpg"
      },
      {
        "ruName": "Воробей",
        "engName": "Passer domesticus",
        "info": "Воробьи́ные (лат. Passeridae) — семейство небольших оседлых, реже кочевых, птиц из отряда воробьинообразных. Представители семейства имеют короткие ноги, многие виды по земле передвигаются прыжками.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Petronia_xanthocollis.jpg/275px-Petronia_xanthocollis.jpg"
      },
      {
        "ruName": "Голубь",
        "engName": "Columba livia",
        "info": "Длина крыла 20—27 см, масса 200—650 г[2]. Населяют Евразию, Африку и Австралию. Наиболее распространённый вид из этого рода — сизый голубь, интродуцирован на все континенты.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/ColumbaOenas.jpg/275px-ColumbaOenas.jpg"
      },
      {
        "ruName": "Кряква",
        "engName": "Anas platyrhynchos",
        "info": "Кря́ква (лат. Anas platyrhynchos) — птица из семейства утиных (Anatidae) отряда гусеобразных (Anseriformes). Наиболее известная и распространённая дикая утка[2]. Длина тела самца около 62 см, самки — около 57 см, масса достигает 1—1,5 кг[3] (осенью, когда птица откормится перед самым перелётом, её вес может достигать 2 кг). Голова и шея самца зелёные, зоб и грудь коричнево-бурые, спина и брюшная сторона тела серого цвета с тонкими поперечными пятнышками.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/240px-Anas_platyrhynchos_male_female_quadrat.jpg"
      },
      {
        "ruName": "Дрозд",
        "engName": "Turdus merula",
        "info": "Распространены в Европе, Азии и Америке; завезены в Новую Зеландию. На зиму северные виды улетают на юг, собираясь большими стаями.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blackbird_%28male%29.jpg/120px-Blackbird_%28male%29.jpg"
      },
      {
        "ruName": "Синица",
        "engName": "Parus major",
        "info": "Синицы, или настоящие синицы (лат. Parus) — род птиц семейства синицевых. Обычный представитель рода — большая синица (Parus major) широко распространена на территории России",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parus_major_-_2013%2703%2730-16h47m21s.jpg/240px-Parus_major_-_2013%2703%2730-16h47m21s.jpg"
      },
      {
        "ruName": "Жаворонок",
        "engName": "Alauda arvensis",
        "info": "Жаворонковые — птицы малого или среднего размера: длина 10—25 см, масса от 15 до 80 г. Телосложение крепкое, шея короткая, голова большая. Крылья длинные, широкие и острые, обеспечивающие быстрый полет. Форма клюва сильно отличается по родам и видам. ",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alauda_arvensis_2.jpg/275px-Alauda_arvensis_2.jpg"
      },
      {
        "ruName": "Ворон",
        "engName": "Corvus corax",
        "info": "Это крупнейший представитель воробьинообразных птиц: длина тела достигает 60—70 см, размах крыльев 120—150 см, масса 800—1600 г (по другим данным, до 2000 г[). Другие характерные особенности: очень массивный, высокий и острый клюв, и удлинённые перья на горле (так называемая «борода»).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Raven_Grand_Canyon_1.jpg/275px-Common_Raven_Grand_Canyon_1.jpg"
      },
      {
        "ruName": "Ворона",
        "engName": "Corvus corone",
        "info": "Голова, крылья и хвост чёрные, туловище серое. Средняя длина — 50 сантиметров, масса тела 460—735 граммов, размах крыльев — до 1 метра.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2013.06.24-12.-Woblitzsee-Havelberge-Nebelkraehe.jpg/275px-2013.06.24-12.-Woblitzsee-Havelberge-Nebelkraehe.jpg"
      },
      {
        "ruName": "Скворец",
        "engName": "Sturnus vulgaris",
        "info": "К роду скворцов относятся около 10 видов птиц средней величины, мало отличающихся одна от другой как по окраске, так и по образу жизни.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Asian_Pied_Starling_I_IMG_5520.jpg/275px-Asian_Pied_Starling_I_IMG_5520.jpg"
      },
      {
        "ruName": "Трясогузка",
        "engName": "Motacilla flava",
        "info": "Отличий от других представителей семейства трясогузковых сравнительно немного. У длинного узкого, прямо обрезанного хвоста два средних пера немного длиннее боковых; 1-е маховое перо короче 2-го и 3-го; слабоизогнутый коготь заднего пальца короче самого пальца.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Motacilla_alba_alba_cropped.JPG/120px-Motacilla_alba_alba_cropped.jpg"
      }
    ],
    "oceanBirds": [
      {
        "ruName": "Чайка",
        "engName": "Larus argentatus",
        "info": "Семейство птиц отряда ржанкообразных, обитающих в морских акваториях либо внутренних водоёмах, а также в пределах населённых пунктов. Известны с олигоцена.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lachmoewe2cele4.jpg/275px-Lachmoewe2cele4.jpg"
      },
      {
        "ruName": "Пингвин",
        "engName": "Aptenodytes forsteri",
        "info": "Семейство нелетающих морских птиц, единственное современное в отряде пингвинообра́зных",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Manchot_01.jpg/275px-Manchot_01.jpg"
      },
      {
        "ruName": "Буревестник",
        "engName": "Puffinus puffinus",
        "info": "К буревестниковым относятся многочисленные виды, в основном это птицы средней величины. Представители этого семейства встречаются у берегов всех океанов, но большей частью в Южном полушарии.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Damier_du_Cap_-_Cape_Petrel.jpg/275px-Damier_du_Cap_-_Cape_Petrel.jpg"
      },
      {
        "ruName": "Альбатрос",
        "engName": "Diomedea exulans",
        "info": "Обитают альбатросы в Южном океане (недавнее образование — воды, окружающие Антарктиду) и в основном гнездятся на отдалённых островах.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Diomedea_epomophora_in_flight_5_-_SE_Tasmania.jpg/275px-Diomedea_epomophora_in_flight_5_-_SE_Tasmania.jpg"
      },
      {
        "ruName": "Баклан",
        "engName": "Phalacrocorax carbo",
        "info": "Широко распространены по всему миру с большим биологическим разнообразием в тропическом и умеренном климате.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Phalacrocorax_carbo_%282005_08_28%29.jpg/120px-Phalacrocorax_carbo_%282005_08_28%29.jpg"
      },
      {
        "ruName": "Олуша",
        "engName": "Sula nebouxii",
        "info": "Семейство морских птиц из отряда олушеобразных. Являются отличными летунами и проводят большую часть своей жизни над открытым морем.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Northern_Gannet_2006_2.jpg/275px-Northern_Gannet_2006_2.jpg"
      },
      {
        "ruName": "Пеликан",
        "engName": "Pelecanus",
        "info": "Самые крупные птицы в своём отряде: длина тела 130—180 см, масса 7—14 кг. Облик очень характерный: неуклюжее, массивное туловище, большие крылья, короткие и толстые ноги с широкой перепонкой между пальцами, короткий закруглённый хвост.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brown_Pelican21K.jpg/120px-Brown_Pelican21K.jpg"
      },
      {
        "ruName": "Поморник",
        "engName": "Stercorarius maccormicki",
        "info": "Относительно крупная птица бурого цвета с характерными удлинёнными белыми пятнами в основании маховых перьев на крыльях, которая гнездится в высокоширотной Антарктике циркумполярно.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Subantarktikskua01.jpg/275px-Subantarktikskua01.jpg"
      }
    ],
    "songBirds": [
      {
        "ruName": "Жаворонок",
        "engName": "Alauda arvensis",
        "info": "Жаворонковые — птицы малого или среднего размера: длина 10—25 см, масса от 15 до 80 г. Телосложение крепкое, шея короткая, голова большая. Крылья длинные, широкие и острые, обеспечивающие быстрый полет. Форма клюва сильно отличается по родам и видам. ",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alauda_arvensis_2.jpg/275px-Alauda_arvensis_2.jpg"
      },
      {
        "ruName": "Скворец",
        "engName": "Sturnus vulgaris",
        "info": "К роду скворцов относятся около 10 видов птиц средней величины, мало отличающихся одна от другой как по окраске, так и по образу жизни.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Asian_Pied_Starling_I_IMG_5520.jpg/275px-Asian_Pied_Starling_I_IMG_5520.jpg"
      },
      {
        "ruName": "Трясогузка",
        "engName": "Motacilla flava",
        "info": "Отличий от других представителей семейства трясогузковых сравнительно немного. У длинного узкого, прямо обрезанного хвоста два средних пера немного длиннее боковых; 1-е маховое перо короче 2-го и 3-го; слабоизогнутый коготь заднего пальца короче самого пальца.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Motacilla_alba_alba_cropped.JPG/120px-Motacilla_alba_alba_cropped.jpg"
      },
      {
        "ruName": "Синица",
        "engName": "Parus major",
        "info": "Синицы, или настоящие синицы (лат. Parus) — род птиц семейства синицевых. Обычный представитель рода — большая синица (Parus major) широко распространена на территории России",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parus_major_-_2013%2703%2730-16h47m21s.jpg/240px-Parus_major_-_2013%2703%2730-16h47m21s.jpg"
      },
      {
        "ruName": "Дрозд",
        "engName": "Turdus merula",
        "info": "Распространены в Европе, Азии и Америке; завезены в Новую Зеландию. На зиму северные виды улетают на юг, собираясь большими стаями.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blackbird_%28male%29.jpg/120px-Blackbird_%28male%29.jpg"
      },
      {
        "ruName": "Соловей",
        "engName": "Luscinia luscinia",
        "info": "Соловьи́, соловьи́ные (лат. Luscinia) — род птиц из отряда воробьинообразных. В зависимости от подхода к классификации относится либо к семейству дроздовых (Turdidae), либо к семейству мухоловковых (Muscicapidae).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Luscinia_megarhynchos_Istria_01.jpg/200px-Luscinia_megarhynchos_Istria_01.jpg"
      },
      {
        "ruName": "Канарейка",
        "engName": "Serinus canaria",
        "info": "Канарейка несколько больше, чем дикий предок, канарский канареечный вьюрок. Певчие и цветные канарейки длиной примерно от 13,5 до 14,5 см.",
        "url": "https://www.pitomec.ru/upload/kinds_photos/Kanareyka.jpg"
      }
    ],
    "warmUp": [
      {
        "ruName": "Снегирь",
        "engName": "Pyrrhula pyrrhula",
        "info": "Птица мелких размеров, чуть больше воробья. Голова сверху, вокруг клюва и глаз — чёрная. Маховые и рулевые перья тоже чёрные, с синим металлическим отливом. Поясница и подхвостье — белые. Спина, плечи и зашеек у самца серые.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bullfinch_side-on.jpg/240px-Bullfinch_side-on.jpg"
      },
      {
        "ruName": "Аист",
        "engName": "Ciconia ciconia",
        "info": "Для аистов характерны длинные обнажённые ноги, покрытые сетчатой кожей; клюв длинный, прямой, конический; передние пальцы соединены между собой широкой плавательной перепонкой, пальцы короткие с розоватыми когтями; на голове и шее местами голая кожа.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ciconia_Diversity.jpg/275px-Ciconia_Diversity.jpg"
      },
      {
        "ruName": "Цапля",
        "engName": "Ardea cinerea",
        "info": "Ца́плевые (лат. Ardeidae) — семейство птиц отряда пеликанообразных. В целом семейство имеет ряд общих признаков, но классификация отдельных видов до сих пор затруднена и находится на стадии пересмотра. Выделение цапель в отдельный отряд цаплеобразные (Ardeiformes) не является общепризнанным.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ardea_cinerea.jpg/275px-Ardea_cinerea.jpg"
      },
      {
        "ruName": "Соловей",
        "engName": "Luscinia luscinia",
        "info": "Соловьи́, соловьи́ные (лат. Luscinia) — род птиц из отряда воробьинообразных. В зависимости от подхода к классификации относится либо к семейству дроздовых (Turdidae), либо к семейству мухоловковых (Muscicapidae).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Luscinia_megarhynchos_Istria_01.jpg/200px-Luscinia_megarhynchos_Istria_01.jpg"
      },
      {
        "ruName": "Воробей",
        "engName": "Passer domesticus",
        "info": "Воробьи́ные (лат. Passeridae) — семейство небольших оседлых, реже кочевых, птиц из отряда воробьинообразных. Представители семейства имеют короткие ноги, многие виды по земле передвигаются прыжками.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Petronia_xanthocollis.jpg/275px-Petronia_xanthocollis.jpg"
      },
      {
        "ruName": "Голубь",
        "engName": "Columba livia",
        "info": "Длина крыла 20—27 см, масса 200—650 г[2]. Населяют Евразию, Африку и Австралию. Наиболее распространённый вид из этого рода — сизый голубь, интродуцирован на все континенты.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/ColumbaOenas.jpg/275px-ColumbaOenas.jpg"
      },
      {
        "ruName": "Кряква",
        "engName": "Anas platyrhynchos",
        "info": "Кря́ква (лат. Anas platyrhynchos) — птица из семейства утиных (Anatidae) отряда гусеобразных (Anseriformes). Наиболее известная и распространённая дикая утка[2]. Длина тела самца около 62 см, самки — около 57 см, масса достигает 1—1,5 кг[3] (осенью, когда птица откормится перед самым перелётом, её вес может достигать 2 кг). Голова и шея самца зелёные, зоб и грудь коричнево-бурые, спина и брюшная сторона тела серого цвета с тонкими поперечными пятнышками.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/240px-Anas_platyrhynchos_male_female_quadrat.jpg"
      },
      {
        "ruName": "Дрозд",
        "engName": "Turdus merula",
        "info": "Распространены в Европе, Азии и Америке; завезены в Новую Зеландию. На зиму северные виды улетают на юг, собираясь большими стаями.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blackbird_%28male%29.jpg/120px-Blackbird_%28male%29.jpg"
      },
      {
        "ruName": "Синица",
        "engName": "Parus major",
        "info": "Синицы, или настоящие синицы (лат. Parus) — род птиц семейства синицевых. Обычный представитель рода — большая синица (Parus major) широко распространена на территории России",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parus_major_-_2013%2703%2730-16h47m21s.jpg/240px-Parus_major_-_2013%2703%2730-16h47m21s.jpg"
      },
      {
        "ruName": "Жаворонок",
        "engName": "Alauda arvensis",
        "info": "Жаворонковые — птицы малого или среднего размера: длина 10—25 см, масса от 15 до 80 г. Телосложение крепкое, шея короткая, голова большая. Крылья длинные, широкие и острые, обеспечивающие быстрый полет. Форма клюва сильно отличается по родам и видам. ",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alauda_arvensis_2.jpg/275px-Alauda_arvensis_2.jpg"
      },
      {
        "ruName": "Ворон",
        "engName": "Corvus corax",
        "info": "Это крупнейший представитель воробьинообразных птиц: длина тела достигает 60—70 см, размах крыльев 120—150 см, масса 800—1600 г (по другим данным, до 2000 г[). Другие характерные особенности: очень массивный, высокий и острый клюв, и удлинённые перья на горле (так называемая «борода»).",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_Raven_Grand_Canyon_1.jpg/275px-Common_Raven_Grand_Canyon_1.jpg"
      },
      {
        "ruName": "Ворона",
        "engName": "Corvus corone",
        "info": "Голова, крылья и хвост чёрные, туловище серое. Средняя длина — 50 сантиметров, масса тела 460—735 граммов, размах крыльев — до 1 метра.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2013.06.24-12.-Woblitzsee-Havelberge-Nebelkraehe.jpg/275px-2013.06.24-12.-Woblitzsee-Havelberge-Nebelkraehe.jpg"
      },
      {
        "ruName": "Скворец",
        "engName": "Sturnus vulgaris",
        "info": "К роду скворцов относятся около 10 видов птиц средней величины, мало отличающихся одна от другой как по окраске, так и по образу жизни.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Asian_Pied_Starling_I_IMG_5520.jpg/275px-Asian_Pied_Starling_I_IMG_5520.jpg"
      },
      {
        "ruName": "Трясогузка",
        "engName": "Motacilla flava",
        "info": "Отличий от других представителей семейства трясогузковых сравнительно немного. У длинного узкого, прямо обрезанного хвоста два средних пера немного длиннее боковых; 1-е маховое перо короче 2-го и 3-го; слабоизогнутый коготь заднего пальца короче самого пальца.",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Motacilla_alba_alba_cropped.JPG/120px-Motacilla_alba_alba_cropped.jpg"
      }
    ]
  }
]
]
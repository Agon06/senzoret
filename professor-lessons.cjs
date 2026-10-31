// Each entry follows the corresponding worked solution in the supplied PDF.
// Original pages remain embedded beside these explanations as the source of truth.
module.exports = [
[
['Numri maksimal i gjendjeve','Nₘₐₓ = mⁿ','Profesori nis me gjendjet, para kapacitetit. Çdo qelizë ka m mundësi; n qeliza japin m të shumëzuar n herë.','Gjendjet: baza m, fuqia n.','Me cilën formulë nis zgjidhja?'],
['Logaritmo të dy anët','log₂(Nₘₐₓ) = log₂(mⁿ)','Merr logaritmin me bazë 2 në të dy anët. Baza 2 lidhet me matjen e informacionit në bit.','I njëjti veprim në të dy anët.','Pse përdoret baza 2?'],
['Emërto kapacitetin','C = log₂(Nₘₐₓ)','Kjo është lidhja ndërmjet numrit të gjendjeve dhe kapacitetit. C tregon sa bit duhen për ato gjendje.','Logaritmi i gjendjeve jep bitët.','Si lidhet C me Nₘₐₓ?'],
['Zbrit fuqinë para logaritmit','C = log₂(mⁿ) = n · log₂(m)','Përdor rregullin log(aⁿ) = n·log(a). Këtu profesori e kthen formulën në një shumëzim të lehtë.','Fuqia n zbret përpara.','Çka ndodh me n kur e nxjerr nga logaritmi?'],
['Zëvendëso m dhe n','C = 8 · log₂(2) = 8 · 1 = 8 bit','log₂(2) = 1 sepse 2¹ = 2. Prandaj mbetet 8 herë 1.','Për binar: C = n.','Sa është log₂(2) dhe sa del C?'],
['Llogarit dhe interpreto gjendjet','mⁿ = 2⁸ = 256; nga 00000000 deri 11111111','Profesori kthehet te formula e parë për të treguar kombinimet. 8 bit dhe 256 gjendje janë dy madhësi të ndryshme.','8 bit → 256 kombinime.','Cili është dallimi ndërmjet 8 dhe 256 në këtë detyrë?']
],
[
['Kushti i ekuilibrit','G₁ · l₁ = G₂ · l₂','Secila masë shumëzohet me krahun e vet. Peshorja balancohet kur të dy prodhimet barazohen.','Masa × krahu në secilën anë.','Cilin barazim shkruan së pari profesori?'],
['Dallo të panjohurën dhe të dhënat','G₁ = ?; G₂ = 9 kg; l₁ = 100 cm; l₂ = 50 cm','Kërkohet masa referente G₁. Të dy krahët janë në cm, prandaj raporti i tyre mund të përdoret drejtpërdrejt.','G₁ është ajo që duhet me e nxjerrë.','Cila masë kërkohet dhe cilit krah i takon?'],
['Izolo masën','G₁ = (G₂ · l₂) / l₁','Për ta lënë G₁ vetëm, pjesëto të dy anët e barazimit fillestar me l₁.','l₁ kalon në emërues me pjesëtim.','Me çka pjesëton për ta lënë vetëm G₁?'],
['Zëvendëso dhe llogarit','G₁ = (9 kg · 50 cm)/(100 cm) = (450/100) kg = 4,5 kg','Shumëzo 9 me 50; pastaj pjesëto me 100. Njësitë cm shkurtohen dhe mbetet kg.','9 × 50 ÷ 100.','Si shkurtohen njësitë dhe sa del masa?'],
['Vërteto ekuilibrin','4,5 kg · 1 m = 9 kg · 0,5 m → 4,5 kg·m = 4,5 kg·m','Profesori e kontrollon përgjigjen duke e kthyer në barazimin fillestar. 100 cm = 1 m dhe 50 cm = 0,5 m.','Dy anët duhet me dalë të njëjta.','Si e provon që 4,5 kg është përgjigjja e duhur?']
],
[
['Varshmëria lineare','l/L = r/R = Uᵢ/U','Ky është hapi themelor i profesorit: pjesa e gjatësisë, pjesa e rezistencës dhe pjesa e tensionit janë të barabarta.','Tri pjesë, një raport.','Cilat tri raporte barazohen?'],
['Veço raportin për pozitën','l/L = Uᵢ/U','Për l të duhen vetëm gjatësia dhe tensionet. Raportin r/R e lë për më vonë.','Për l merre l/L.','Cilën pjesë të barazimit përdor për pozitën?'],
['Zëvendëso me njësitë e profesorit','l/(200 · 10⁻³ m) = 7 V / 10 V','Profesori i kthen 200 mm në 200·10⁻³ m. Në anën e djathtë V shkurtohet dhe 7/10 = 0,7.','mm → m: ×10⁻³.','Si shkruhen 200 mm në metra?'],
['Nxirre dhe llogarit pozitën','l = 0,7 · 200 · 10⁻³ m = 140 · 10⁻³ m = (140/1000) m = 0,14 m = 140 mm','Shumëzo të dy anët me gjatësinë e plotë. Këto janë forma të ndryshme të së njëjtës gjatësi, jo rezultate të ndryshme.','0,14 m = 140 mm.','Si kalon nga raporti te l dhe si e kthen në mm?'],
['Veço raportin për rezistencën','r/R = Uᵢ/U → r/(20 kΩ) = 7 V / 10 V','Kthehu te barazimi i parë dhe përdor pjesën e rezistencës. Raporti është prapë 0,7.','I njëjti 7/10.','Cili raport përdoret për r?'],
['Nxirre rezistencën','r = 20 kΩ · 0,7 = 14 kΩ','Shumëzo raportin me rezistencën e plotë. Këtu R është në kΩ, prandaj r del në kΩ.','20 × 0,7 = 14.','Sa del r dhe në cilën njësi?']
],
[
['Forca elektromotore','E = c · Φ · ω','Profesori nis me tensionin që krijon gjeneratori. Ende nuk përdoren rezistencat.','E vjen e para.','Cilën madhësi llogarit së pari?'],
['Zëvendësimi në E','E = 0,5 · 0,02 · 300 = 3 V','Shumëzo konstantën, fluksin dhe shpejtësinë këndore. Rezultatin 3 V e përdor në hapin tjetër.','0,5 × 0,02 × 300.','Sa del E?'],
['Formula e rrymës','I = E/(Rᴸ + Rᵣ)','Rryma kalon nëpër rezistencën e ngarkesës dhe rezistencën e brendshme. Për këtë qark ato mblidhen.','Dy rezistencat në emërues.','Pse emëruesi është Rᴸ + Rᵣ?'],
['Zëvendësimi dhe kthimi në mA','I = 3/(100 + 20) = 3/120 = 0,025 A = 25 mA','100 + 20 = 120 Ω. Pastaj 3/120 = 0,025 A. Për mA shumëzo me 1000.','0,025 A = 25 mA.','Si kalon nga amper në miliamper?'],
['Formula direkte e daljes','Uᵢ = Rᴸ · (c · Φ · ω)/(Rᴸ + Rᵣ)','Profesori përdor formulën direkte, ku cΦω është E dhe thyesa është I. Pra është i njëjti parim si Uᵢ = Rᴸ·I.','Rᴸ herë rryma.','Si lidhet kjo formulë me ligjin e Ohmit?'],
['Zëvendësimi dhe rezultati i daljes','Uᵢ = 100 · (0,5 · 0,02 · 300)/(100 + 20) = 100 · 3/120 = 2,5 V','Ruaje rendin: llogarit prodhimin sipër dhe shumën poshtë, pastaj shumëzo me 100.','100 × 3 ÷ 120.','Si del tensioni 2,5 V?']
],
[
['Barazimi i forcave','F = Fₚ − S · h₁ · ρₜ · g','Në modelin e dhënë forca e matur është pesha e jashtme minus forca ngritëse e lëngut. Produkti S·h₁ jep vëllimin e zhytur në këtë model.','Forca e matur = pesha − ngritja.','Çka përfaqëson pjesa që zbritet nga Fₚ?'],
['Izolo nivelin','h₁ = (Fₚ − F)/(S · ρₜ · g)','Nga barazimi fillestar merr Fₚ−F = S·h₁·ρₜ·g. Pastaj pjesëto me S·ρₜ·g.','Diferenca e forcave sipër.','Si nxirret h₁ nga barazimi?'],
['Zëvendëso të dhënat','h₁ = (30 N − 9,32 N)/(0,2 m² · 800 kg/m³ · 9,81 m/s²)','Vendos çdo numër te simboli i vet. Mos e ndërro rendin e zbritjes në numërues.','30 − 9,32; poshtë tri madhësi.','Cili numër hyn në secilin vend të formulës?'],
['Llogarit dy pjesët e thyesës','h₁ = 20,68 N / (1569,6 kg/s²)','Sipër: 30−9,32 = 20,68. Poshtë: 0,2·800·9,81 = 1569,6. Njësitë m²·kg/m³·m/s² japin kg/s².','Veç sipër, veç poshtë.','Sa del numëruesi dhe sa emëruesi?'],
['Vërteto njësinë matëse','h₁ = (20,68 kg·m/s²)/(1569,6 kg/s²) → njësia m','Zëvendëso N me kg·m/s². Faktorët kg dhe s² shkurtohen; mbetet m, pra është gjatësi.','N = kg·m/s²; mbetet m.','Pse rezultati del në metra?'],
['Pjesëto dhe kthe në mm','h₁ ≈ 0,01317 m = 13,17 mm (si rrumbullakimi në PDF)','Profesori jep 0,01317 m dhe e shumëzon me 1000. Këtu ruhet afrimi i dokumentit.','m → mm: ×1000.','Si kthehet niveli në mm?'],
['Kuptimi i formulës së përgjithshme','h₁ = (Fₚ − F)/(S · ρₜ · g)','Në fund profesori përsërit formulën dhe lidhjen me forcën ngritëse të Arkimedit. Formula e përgjithshme është ajo që përdor kur numrat ndryshojnë.','Baraspesha mes peshës dhe ngritjes.','Çfarë parimi fizik përdor ky senzor?']
],
[
['Formula e vëllimit','V = ∫₀ʰ S(h) dh','Profesori e mbledh vëllimin nga shtresat horizontale. Çdo shtresë e hollë ka vëllim S(h)·dh.','Sipërfaqja × shtresa e hollë.','Pse këtu përdoret integral?'],
['Vendos funksionin e dhënë','V = ∫₀ʰ (2 − 0,1h) dh','S(h) në këtë detyrë është 2−0,1h. Ndërron vetëm funksionin brenda integralit.','S(h) zëvendësohet me shprehjen e vet.','Çka vendos brenda integralit?'],
['Integro secilin term','V = [2h − (0,1/2)h²]₀ʰ = 2h − 0,05h²','Integrali i 2 është 2h; integrali i h është h²/2. Vlera te kufiri 0 është zero.','Fuqia rritet me 1, pjesëto me fuqinë e re.','Nga vjen koeficienti 0,05?'],
['Vendos lartësinë e matur','V = 2 · 4 − 0,05 · 4²','Tash përdor h = 4 m. Së pari 4² = 16, pastaj 0,05·16 = 0,8.','Mos e harro katrorin te 4.','Ku zëvendësohet h = 4?'],
['Llogarit vëllimin','V = 8 − 0,8 = 7,2 m³','Ky është rezultati i profesorit. Njësia e vëllimit është m³, sepse integron m² ndaj një lartësie në m. Në PDF njësitë e termave ndërmjetës janë shkruar jo njëtrajtshëm.','8 − 0,8 = 7,2 m³.','Pse njësia përfundimtare është m³?']
],
[
['Momentet dhe forca e rëndesës','M = F · d; F = m · G → M = m · G · d','Profesori nis me përkufizimin e momentit. G këtu përdoret për përshpejtimin e rëndesës, jo për masën.','Momenti = forcë × largësi.','Si shndërrohet formula M = Fd në formulë me masën?'],
['Lexo masat dhe largësitë nga figura','Majtas: x në 4d, 11 g në 2d. Djathtas: 15 g në 2d, 21 g në 4d.','Largësitë maten nga pika A. Numëro ndarjet nga mbështetja deri te secila masë.','Gjithmonë largësia nga A.','Sa ndarje larg A është secila masë?'],
['Barazo shumat e momenteve','x · G · 4d + 11 · G · 2d = 15 · G · 2d + 21 · G · 4d','Në ekuilibër momentet që rrotullojnë majtas barazohen me ato që rrotullojnë djathtas. Të gjitha masat përdoren me të njëjtën njësi.','Shuma majtas = shuma djathtas.','Si shkruhet barazimi i plotë para shkurtimit?'],
['Shkurto G','x · 4d + 11 · 2d = 15 · 2d + 21 · 4d','Pjesëto çdo term me të njëjtin faktor G. Ai zhduket nga të dy anët.','Faktori i përbashkët hiqet kudo.','Pse mund të shkurtohet G?'],
['Shkurto d','4x + 11 · 2 = 15 · 2 + 21 · 4','Edhe d është faktor i përbashkët. Pas pjesëtimit me d mbetet një ekuacion i thjeshtë.','Mbeten vetëm koeficientët e ndarjeve.','Çka mbetet pasi pjesëton me d?'],
['Kryej shumëzimet','4x + 22 = 30 + 84','11·2 = 22, 15·2 = 30 dhe 21·4 = 84. Ende nuk ka ndryshuar asnjë shenjë.','Së pari shumëzimet.','Sa del secili prodhim?'],
['Izolo 4x','4x = 114 − 22 = 92','Mblidh 30+84 = 114; pastaj zbrit 22 nga të dy anët.','22 largohet me zbritje.','Pse 22 bëhet −22 në anën tjetër?'],
['Izolo x dhe interpreto','x = (114 − 22)/4 = 92/4 = 23 g','Pjesëto me 4 sepse 4x do të thotë 4 herë x. Masa që duhet vendosur në pikën a është 23 g.','92 ÷ 4 = 23 g.','Çfarë mase duhet vendosur dhe ku?']
],
[
['Formula e rrymës së diodës','Iᴰ = Iₛ · (e^(Uᴰ/(ηUᵀ)) − 1)','Profesori e jep formulën para llogaritjes. Iₛ është rryma e ngopjes; Uᴰ tensioni në diodë; Uᵀ tensioni termik.','Rryma varet nga një eksponencial.','Cila është formula fillestare?'],
['Identifiko të dhënat','Iₛ = 0,1 nA; Uᴰ = 0,5 V; η = 1; T = 300 K','Në modelin e përdorur nga testi η = 1 për këtë diodë Ge. Mungon Uᵀ, prandaj profesori e llogarit më parë.','Para Iᴰ duhet Uᵀ.','Cila madhësi mungon për ta përdorur formulën?'],
['Formula dhe konstantet e Uᵀ','Uᵀ = kT/q; k = 1,3806·10⁻²³ J/K; q = 1,6022·10⁻¹⁹ C','Shkronja e për ngarkesën në PDF këtu shkruhet q që të dallohet nga baza e eksponencialit. Është e njëjta madhësi fizike.','k herë T, pjesëtuar me ngarkesën.','Cilat konstante përdoren për tensionin termik?'],
['Zëvendëso dhe shumëzo','Uᵀ = (1,3806·10⁻²³ · 300)/(1,6022·10⁻¹⁹) = (414,18·10⁻²³)/(1,6022·10⁻¹⁹)','Së pari shumëzo 1,3806 me 300. Fuqitë e dhjetës mbeten ende të shkruara veçmas.','1,3806 × 300 = 414,18.','Cila është vlera e numëruesit pas shumëzimit?'],
['Pjesëto dhe puno me fuqitë','Uᵀ ≈ 258,507 · 10⁻²³ · 10¹⁹ = 258,507 · 10⁻⁴ = 258,507/10000 V','Kur pjesëton me 10⁻¹⁹, shumëzon me 10¹⁹. Eksponentët −23+19 japin −4.','Pjesëtim me fuqi negative → shumëzim me fuqi pozitive.','Si del 10⁻⁴?'],
['Kthe dhe rrumbullako tensionin','Uᵀ ≈ 0,02585 V ≈ 25,8 mV ≈ 26 mV','Ky është afrimi që profesori përdor në vazhdim. Për ta futur në formulë me Uᴰ në V, përdor 26·10⁻³ V.','26 mV = 0,026 V.','Cilën vlerë të Uᵀ përdor profesori më tej?'],
['Vërteto njësinë','(J/K)·K/C = J/C = (V·C)/C = V','Kelvini shkurtohet. Nga energjia W = U·Q dihet që J = V·C, prandaj J/C = V.','J për C jep volt.','Si vërtetohet njësia e tensionit termik?'],
['Zëvendëso në formulën e rrymës','Iᴰ = 0,1·10⁻⁹ · (2,72^(0,5/(1·26·10⁻³)) − 1) A','Kthe 0,1 nA në 0,1·10⁻⁹ A. Profesori përdor afrimin e ≈ 2,72.','nA → A: ×10⁻⁹.','Si zëvendësohen të gjitha madhësitë në formulë?'],
['Thjeshto eksponentin','0,5/(26·10⁻³) = (0,5·1000)/26 = 500/26 ≈ 19,23','Ky varg tregon pse 10⁻³ në emërues bëhet shumëzim me 1000 në numërues.','Eksponenti: 500 ÷ 26.','Nga vjen 500/26?'],
['Llogarit fuqinë dhe zbrit 1','Iᴰ ≈ 0,1·10⁻⁹ · (227384064,14 − 1) A','Në PDF përdoret 2,72^19,23 ≈ 227384064,14. Kjo vlerë përmban afrimet e eksponentit dhe të bazës.','Fuqia së pari, pastaj −1.','Cili veprim bëhet para shumëzimit me Iₛ?'],
['Shumëzo dhe pjesëto me 10⁹','Iᴰ ≈ (0,1 · 227384063,14)/10⁹ = 22738406,314/1000000000 A','Shkrimi 10⁻⁹ do të thotë pjesëtim me një miliard. Ky është i njëjti hap si shumëzimi me 0,000000001.','Fuqia negative është pjesëtim.','Si shkruhet shumëzimi me 10⁻⁹ si thyesë?'],
['Përfundimi','Iᴰ ≈ 0,0227 A = 22,7 mA','Në fund profesori rrumbullakon dhe kalon në miliamper. Rezultati ruan afrimet e dokumentit.','A → mA: ×1000.','Si del përgjigjja 22,7 mA?']
],
[
['Rregulli i përdorur në zgjidhje','Kapaciteti maksimal i shtresës: 2n²','n është numri rendor i shtresës, duke filluar afër bërthamës. Për Ge përdoret shpërndarja 2, 8, 18, 4.','n = 1, 2, 3, 4 nga brenda jashtë.','Çka tregon n në formulë?'],
['Orbita e parë','2 · 1² = 2 · 1 = 2 elektrone','Për orbitën e parë vendos n = 1. Së pari katrori, pastaj shumëzimi me 2.','E para: 2.','Sa elektrone ka shtresa e parë?'],
['Orbita e dytë','2 · 2² = 2 · 4 = 8 elektrone','Për orbitën e dytë vendos n = 2. 2² është 4.','E dyta: 8.','Si del numri 8?'],
['Orbita e tretë','2 · 3² = 2 · 9 = 18 elektrone','Për orbitën e tretë vendos n = 3. Këtu 3² = 9.','E treta: 18.','Si del numri 18?'],
['Orbita e katërt dhe përfundimi','32 − (2 + 8 + 18) = 4 → Ge: 2, 8, 18, 4','Nga 32 elektronet, 28 janë në tri shtresat e para dhe mbeten 4. Sqarim: 2n² vlen si kapacitet maksimal edhe për shtresën e katërt; ajo nuk është e mbushur.','32 gjithsej; 4 të fundit.','Pse shtresa e katërt ka 4 dhe jo 32 elektrone?']
],
[
['Elektronet e lira','nᵢ = 1,5 · 10¹⁰ elektrone/cm³','Profesori jep dendësinë e elektroneve të lira për Si të pastër në 300 K. Kjo vlerë i përket kushteve të detyrës.','Së pari sa elektrone të lira.','Cila është dendësia e elektroneve të lira?'],
['Atomet','nᴬ = 5 · 10²² atome/cm³','Kjo është dendësia e atomeve për të njëjtin material dhe vëllim.','Pastaj sa atome.','Cila është dendësia e atomeve?'],
['Shkruaj raportin me njësitë','nᴬ/nᵢ = (5·10²² atome/cm³)/(1,5·10¹⁰ elektrone/cm³)','Kërkohen atome për një elektron. Prandaj atomet vendosen sipër dhe elektronet poshtë. cm³ shkurtohet.','Atome për elektron = atome ÷ elektrone.','Cila madhësi shkon në numërues?'],
['Pjesëto koeficientët dhe fuqitë','(5/1,5) · 10^(22−10) ≈ 3,33 · 10¹² atome/elektron','5/1,5 ≈ 3,33. Për fuqitë me bazë 10 zbrit eksponentët: 22−10 = 12.','Pjesëto para; zbrit lart.','Pse eksponenti del 12?'],
['Afrimi dhe kuptimi','≈ 3·10¹² atome për 1 elektron të lirë','Profesori e afron 3,33·10¹² si 3·10¹² dhe e përshkruan me fjalë. Numri me fuqi është mënyra më e qartë për ta mbajtur mend.','Rreth 3·10¹² për një.','Si e shpreh raportin me një fjali?']
],
[
['Të dhënat dhe tensionet paralele','Iₛ = 2·10⁻¹³ A; Uᴰ = Uᴰ₃ = Uᴿ = 0,6 V; R = 1 kΩ','D₃ dhe rezistori lidhen ndërmjet të njëjtave dy pika, prandaj kanë tension të njëjtë.','Paralel → tension i njëjtë.','Pse Uᴰ₃ dhe Uᴿ janë të dy 0,6 V?'],
['Cakto rrymat nga skema','I: në D₁ dhe D₂; Iᴿ: në R; I₁: në D₃','Profesori propozon drejtimet e rrymave. I ndahet në degën e rezistorit dhe degën e D₃.','Një rrymë hyn, dy dalin.','Cilën degë përfaqëson secila rrymë?'],
['Formula e rrymës në D₃','I₁ = Iₛ · (e^(Uᴰ/(ηUᵀ)) − 1); η = 1','Formula e diodës jep rrymën në D₃ sepse tensioni në të dihet. Por më parë duhet Uᵀ.','Tensioni dihet → gjej rrymën.','Pse fillon me D₃?'],
['Formula e tensionit termik dhe konstantet','Uᵀ = kT/q; k = 1,3806·10⁻²³ J/K; q = 1,6022·10⁻¹⁹ C; T = 300 K','Këtu q është ngarkesa që në PDF shënohet e. Mos e ngatërro me bazën e logaritmit natyror.','kT pjesëtuar me q.','Cilat madhësi duhen për Uᵀ?'],
['Llogarit Uᵀ','Uᵀ = (1,3806·10⁻²³·300)/(1,6022·10⁻¹⁹) = (414,18/1,6022)·10⁻⁴ ≈ 258,507/10000 V ≈ 0,02585 V ≈ 26 mV','Shumëzo me 300; pjesëto koeficientët; zbrit eksponentët −23−(−19) = −4. Profesori rrumbullakon në 26 mV.','I njëjti tension termik si te detyra 7.','Si del 26 mV nga konstantet?'],
['Vërteto njësinë','(J/K)·K/C = J/C = (V·C)/C = V','Nga W = U·Q kemi J = V·C. Prandaj tensioni termik del në volt.','J/C = V.','Si vërtetohet njësia?'],
['Zëvendëso te I₁','I₁ ≈ 2·10⁻¹³ · 2,72^(0,6/(26·10⁻³)) A','PDF e lë jashtë −1 gjatë llogaritjes sepse fuqia eksponenciale është shumë e madhe krahasuar me 1.','−1 është i papërfillshëm këtu.','Pse profesori e lë jashtë −1?'],
['Thjeshto eksponentin dhe fuqinë','0,6/(26·10⁻³) = 600/26 ≈ 23,07; 2,72^23,07 ≈ 1,0604852100948·10¹⁰','Ky është vargu i afrimeve që përdor PDF-ja. Kthimi i mV në V është arsyeja e faktorit 1000.','Eksponenti: 600 ÷ 26.','Nga vjen eksponenti 23,07?'],
['Përfundo rrymën I₁','I₁ ≈ 2·10⁻¹³ · 1,0604852100948·10¹⁰ ≈ 2,12·10⁻³ A = 2,12 mA','Shumëzo koeficientët; mblidh eksponentët −13+10 = −3.','10⁻³ A është mA.','Si del I₁ = 2,12 mA?'],
['Rryma në rezistor','Iᴿ = Uᴰ/R = 0,6/(1·10³) A = 0,6·10⁻³ A = 0,6 mA','Për rezistorin përdor ligjin e Ohmit, jo formulën eksponenciale.','Rezistori: U/R.','Cila formulë përdoret në degën e R?'],
['Ligji i parë i Kirchhoff-it','I − Iᴿ − I₁ = 0 → I = Iᴿ + I₁ = 0,6 + 2,12 = 2,72 mA','Në nyje rryma që hyn është e barabartë me shumën e rrymave që dalin. Kjo I kalon në dy diodat në seri.','Rrymat mblidhen në nyje.','Pse I = 2,72 mA?'],
['Formula për D₁','I = Iₛ · (e^(Uᴰ₁/(ηUᵀ)) − 1)','Tash dihet rryma dhe kërkohet tensioni. Profesori nis sërish nga formula e diodës për ta kthyer në anën tjetër.','Tash dihet I, kërkohet U.','Çka ndryshon nga llogaritja e D₃?'],
['Pjesëto me Iₛ dhe afro','I/Iₛ = e^(Uᴰ₁/(ηUᵀ)) − 1 ≈ e^(Uᴰ₁/Uᵀ)','Pjesëto të dy anët me Iₛ; përdor η = 1 dhe afro duke lënë jashtë −1 si në PDF.','Izolo eksponencialin.','Cilin veprim bën para logaritmit?'],
['Merr logaritmin natyror','ln(I/Iₛ) = ln(e^(Uᴰ₁/Uᵀ)) = Uᴰ₁/Uᵀ','ln dhe eksponenciali me bazë e e zhbëjnë njëri-tjetrin. Prandaj fuqia del jashtë.','ln(eˣ) = x.','Pse përdoret ln?'],
['Izolo tensionin','Uᴰ₁ = Uᵀ · ln(I/Iₛ)','Shumëzo të dy anët me Uᵀ. Kjo është formula e nxjerrë nga profesori me afrimin e tij.','Uᵀ herë logaritmi i raportit.','Si del formula e Uᴰ₁?'],
['Zëvendëso raportin','Uᴰ₁ = 26·10⁻³ · ln((2,72·10⁻³)/(2·10⁻¹³)) = 26·10⁻³ · ln(1,36·10¹⁰)','2,72/2 = 1,36 dhe −3−(−13) = 10. PDF pastaj përdor ln(1,36·10¹⁰) ≈ 23,33.','Raporti është 1,36·10¹⁰.','Si del 1,36·10¹⁰ brenda ln?'],
['Vlera e shtypur e tensioneve — gabim në PDF','PDF: 26·10⁻³ · 23,33 ≈ 606,66·10⁻³ V = 0,66 V; Uᴰ₂ = 0,66 V','Këtu ruhet hapi i dokumentit për krahasim, por barazimi i fundit është gabim: 606,66·10⁻³ V është 0,60666 V, jo 0,66 V. D₁ dhe D₂ janë të njëjta dhe kanë të njëjtën rrymë.','Dalloi vlerën e dokumentit nga llogaritja e saktë.','Ku ndodh gabimi në këtë hap?'],
['Ligji i dytë i Kirchhoff-it','Uᴴ − Uᴰ₁ − Uᴰ₂ − Uᴿ = 0 → Uᴴ = Uᴰ₁ + Uᴰ₂ + R·Iᴿ','Në kontur tensioni i burimit barazon shumën e rënieve. Profesori e shkruan tensionin në R si R·Iᴿ.','Në kontur mblidhen tensionet.','Cilat tri rënie tensioni duhen mbledhur?'],
['Përfundimi i PDF-së','Uᴴ = 0,66 + 0,66 + 1 kΩ · 0,6 mA = 1,32 + 0,6 = 1,92 V','Kjo është përgjigjja e shtypur në dokument. Me rënien e korrigjuar rreth 0,60666 V, shuma del rreth 1,813 V.','1,92 V në dokument; rreth 1,813 V pas korrigjimit.','Si arrin profesori te përfundimi dhe çfarë duhet shënuar për gabimin?']
],
[
['Lexo qarkun ekuivalent','D₁ dhe D₂ janë Si; E₁ = 10 V; E₂ = 0 V; R = 1 kΩ','Profesori e rivizaton qarkun për ta parë rrugën e rrymës më qartë. Vlerat mbeten të njëjta.','Rivizatimi nuk ndryshon qarkun.','Cilat janë dy hyrjet dhe rezistenca?'],
['Gjendja e D₁','D₁ përçon; Uᴰ₁ = 0,7 V','Për hyrjen 10 V, D₁ është e polarizuar drejt. Në modelin e testit, dioda Si që përçon ka rënie 0,7 V.','D₁ ON → 0,7 V.','Pse D₁ zëvendësohet me rënie 0,7 V?'],
['Gjendja e D₂','D₂ bllokon → dega e saj është e shkëputur','Me hyrjen e dytë 0 V dhe daljen pozitive, D₂ është e polarizuar në të kundërt dhe nuk përçon.','D₂ OFF → ndërprerje.','Pse nuk rrjedh rrymë nga dega e D₂?'],
['Rruga e rrymës dhe Kirchhoff-i','Rryma: E₁ → D₁ → R; E₁ − Uᴰ₁ − U₀ = 0','Pasi dega D₂ është e hapur, konturi aktiv ka burimin 10 V, D₁ dhe rezistorin.','Vetëm konturi që përçon.','Cilin kontur përdor për barazimin e tensioneve?'],
['Tensioni në dalje','U₀ = E₁ − Uᴰ₁ = 10 − 0,7 = 9,3 V','Izolo U₀ nga barazimi i konturit. Tensioni i daljes është edhe tensioni mbi rezistor.','Burimi minus rënia në diodë.','Sa del dalja?'],
['Rryma sipas Ohmit','I = U₀/R = 9,3/(1·10³) A = 9,3·10⁻³ A = 9,3 mA','Pjesëto daljen me 1000 Ω. Pastaj kthe në mA.','V/kΩ jep mA.','Si del rryma 9,3 mA?'],
['Forma tjetër e llogaritjes','E₁ − Uᴰ₁ − R·I = 0 → I = (E₁ − Uᴰ₁)/R = (10 − 0,7)/(1·10³) A = 9,3 mA','Profesori e paraqet të njëjtën rrymë edhe drejtpërdrejt nga Kirchhoff-i. Kjo është rruga e dytë për të njëjtin rezultat.','E njëjta përgjigje nga dy rrugë.','Si e nxjerr I drejtpërdrejt nga barazimi i konturit?'],
['Kuptimi logjik OSE','1 OSE 0 = 1','Mjafton një hyrje aktive për të pasur dalje aktive. Këtu përçon vetëm D₁ dhe kjo mjafton.','Një hyrje 1 mjafton për OSE.','Si lidhet rezultati elektrik me 1 OSE 0?']
],
[
['Polariteti pozitiv','LED i gjelbër përçon; LED i kuq bllokon','Profesori fillon me polaritetin pozitiv dhe hap degën e LED-it të kuq në qarkun ekuivalent.','Pozitiv → i gjelbër.','Cili LED punon për polaritet pozitiv?'],
['Barazimi i tensioneve','U = R·I + Uᴳᴿᴱᴱᴺ','Tensioni i burimit ndahet në rezistor dhe LED-in që përçon.','Burimi = rezistori + LED-i.','Cilin barazim shkruan në kontur?'],
['Izolo dhe llogarit R','R = (U − Uᴳᴿᴱᴱᴺ)/I = (8 − 2)/(20·10⁻³) = 6/0,020 = 0,3·10³ Ω = 0,3 kΩ = 300 Ω','Zbrit 2 V nga 8 V. Kthe 20 mA në 0,020 A. Pastaj pjesëto 6 me 0,020.','(Burimi − LED-i) / rryma.','Pse duhet kthyer 20 mA në amper?'],
['Kontrolli i LED-it të kuq','Uᴿᴱᴰ = −Uᴳᴿᴱᴱᴺ = −2 V; |−2 V| = 2 V < 3 V','LED-i i kuq është bllokues, por madhësia e tensionit të kundërt është vetëm 2 V, nën tensionin e shpimit 3 V.','Kontrollo madhësinë e tensionit të kundërt.','Pse nuk shpohet LED-i bllokues?'],
['Polariteti i kundërt','LED i kuq përçon; LED i gjelbër bllokon','Profesori e përsërit analizën për polaritetin tjetër. Rolet e dy LED-eve ndërrohen.','I kundërt → i kuq.','Çka ndryshon kur ndërrohet polariteti?'],
['Barazimi dhe rezistenca për LED-in e kuq','U − R·I − Uᴿᴱᴰ = 0 → R = (U − Uᴿᴱᴰ)/I = (8 − 2)/(20·10⁻³) = 300 Ω','Llogaritja është e njëjtë sepse të dy LED-et kanë rënie 2 V dhe rryma kufizohet në 20 mA.','Të njëjtat vlera → i njëjti R.','Pse del përsëri 300 Ω?'],
['Kontrolli i LED-it të gjelbër','Uᴳᴿᴱᴱᴺ = −Uᴿᴱᴰ = −2 V; 2 V < 3 V','Edhe në këtë polaritet, LED-i që bllokon ka tension të kundërt me madhësi më të vogël se tensioni i shpimit.','Kontrolli bëhet për të dy polaritetet.','Cili është përfundimi për punën në të dy polaritetet?']
]
];

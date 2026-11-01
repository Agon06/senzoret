// Read the question first; identify each given quantity before calculating.
module.exports = [
{
 facts:[
 ['Çka do të thotë “shifra binare”?','m = 2','Binare do të thotë se kemi dy mundësi: 0 ose 1. Numrin e mundësive për një qelizë e shënojmë me m.'],
 ['Sa qeliza memoruese kemi?','n = 8','Teksti thotë “qelizave memoruese n = 8”. Pra kemi tetë qeliza; n tregon numrin e tyre.']
 ], ask:['Çka duhet me gjetë?','C = ?','Pyetja kërkon kapacitetin e senzorit. Kapacitetin e shënojmë C dhe e masim në bit. Profesori llogarit edhe numrin e gjendjeve N.'],
 why:['Pse përdorim këtë formulë?','N = mⁿ; C = log₂(N)','Çdo qelizë ka m mundësi, prandaj n qeliza japin mⁿ kombinime. Logaritmi me bazë 2 na tregon sa bit përfaqësojnë ato kombinime. Tash e ndjekim nxjerrjen e profesorit.']
},
{
 facts:[
 ['Cilën masë e dimë?','G₂ = 9 kg','Në tekst masa e njohur është 9 kg. Profesori e shënon G₂. Kjo është masë në kilogram, megjithëse shkronja G mund të përdoret ndryshe në detyra të tjera.'],
 ['Sa është gjatësia e tërë?','l = 1,5 m','Krahu i plotë horizontal është 1,5 metra. Teksti më pas na jep veçmas dy pjesët e tij.'],
 ['Sa është krahu i masës që kërkohet?','l₁ = 100 cm','Krahu l₁ i takon masës referente G₁. Këtë masë ende nuk e dimë. Lidhjen e lexojmë në figurë dhe tekst.'],
 ['Sa është krahu i masës së njohur?','l₂ = 50 cm','Krahu l₂ i takon masës G₂ = 9 kg. Dy krahët janë në cm dhe mund t’i krahasojmë drejtpërdrejt.']
 ],ask:['Çka duhet me gjetë?','G₁ = ? kg','Pyetja thotë: “Sa është masa referente ‘tega’ ... G₁?”. Pra kërkojmë masën që duhet vendosur në krahun l₁ që peshorja të balancohet.'],
 why:['Pse i shumëzojmë masat me krahët?','G₁ · l₁ = G₂ · l₂','Një masë e njëjtë ka më shumë ndikim rrotullues kur është më larg mbështetjes. Për ekuilibër, masa herë krahu në njërën anë duhet të barazohet me tjetrën.']
},
{
 facts:[
 ['Sa është gjatësia e plotë?','L = 200 mm','Teksti jep L = 200 mm. Shkronja e madhe L është gjatësia e tërë e potenciometrit.'],
 ['Sa është rezistenca e plotë?','R = 20 kΩ','R është rezistenca e tërë, 20 kiloohm. Nuk është ende rezistenca e pjesës që kërkohet.'],
 ['Sa është tensioni i plotë?','U = 10 V','Në skajet e potenciometrit kemi tensionin U = 10 volt.'],
 ['Sa është tensioni i pjesës së matur?','Uᵢ = 7 V','Tensioni dalës është 7 volt. E krahasojmë me 10 volt të plotë për të ditur çfarë pjese kemi.']
 ],ask:['Çka duhet me gjetë?','l = ?; r = ?','Pyetja kërkon pozitën l dhe rezistencën r. Shkronjat e vogla tregojnë pjesën e gjatësisë dhe pjesën e rezistencës, jo tërësinë.'],
 why:['Pse përdorim raporte të barabarta?','l/L = r/R = Uᵢ/U','Teksti thotë “potenciometrin linear”. Kjo do të thotë se pozita, rezistenca dhe tensioni ndryshojnë në të njëjtin raport. Sa pjesë është 7 V nga 10 V, aq pjesë marrim edhe nga L dhe R.']
},
{
 facts:[
 ['Sa është rezistenca e brendshme?','Rᵣ = 20 Ω','Kjo është rezistenca brenda gjeneratorit. Mos e ngatërro me rezistencën e ngarkesës.'],
 ['Sa është rezistenca e ngarkesës?','Rᴸ = 100 Ω','Kjo është rezistenca në dalje. Tensioni dalës merret në këtë rezistencë.'],
 ['Cila është konstanta e dhënë?','c = 0,5','Teksti jep konstantën c. Ajo hyn si faktor në formulën e tensionit të gjeneruar.'],
 ['Sa është fluksi magnetik?','Φ = 0,02 Wb','Simboli Φ lexohet “fi” dhe këtu tregon fluksin magnetik. Vlera është 0,02 veber.'],
 ['Sa është shpejtësia këndore?','ω = 300 rad/s','Simboli ω lexohet “omega”. Tregon sa shpejt rrotullohet gjeneratori.']
 ],ask:['Çka kërkon pyetja?','E = ?; I = ?; Uᵢ = ?','Kërkohen tri gjëra: forca elektromotore E, rryma I dhe tensioni dalës Uᵢ. I gjejmë në këtë rend sepse secila na duhet për tjetrën.'],
 why:['Me cilën lidhje fillojmë dhe pse?','E = c · Φ · ω','Fillimisht gjejmë tensionin që krijon rrotullimi. Pasi e kemi E, rezistencat na japin rrymën; rryma pastaj na jep tensionin në ngarkesë.']
},
{
 facts:[
 ['Sa forcë është matur në litar?','F = 9,32 N','Kjo është forca e matur, jo pesha e plotë e jashtme. Teksti e shënon F.'],
 ['Sa është forca e peshës së jashtme?','Fₚ = 30 N','Kjo është forca e kundërpeshës. E dallojmë nga F sepse diferenca mes tyre lidhet me ngritjen nga lëngu.'],
 ['Sa është sipërfaqja e prerjes?','S = 0,2 m²','S është sipërfaqja që përdor modeli i dhënë i notuesit. Ajo jepet në metra katrorë.'],
 ['Sa është dendësia e lëngut?','ρₜ = 800 kg/m³','Simboli ρ lexohet “ro”. Na tregon masën për njësi vëllimi të lëngut.'],
 ['Sa është përshpejtimi i rëndesës?','g = 9,81 m/s²','Kjo vlerë lidh masën me forcën e rëndesës dhe hyn në formulën e forcës ngritëse.']
 ],ask:['Çka duhet me gjetë dhe në çfarë njësie?','h₁ = ? mm','Pyetja kërkon nivelin h₁ në milimetra. Kërkon edhe vërtetimin e njësive, prandaj nuk i anashkalojmë ato hapa të profesorit.'],
 why:['Pse fillojmë me barazimin e forcave?','F = Fₚ − S · h₁ · ρₜ · g','Në modelin e testit, lëngu e zvogëlon forcën që matet në litar. Diferenca e forcave tregon ngritjen nga lëngu; nga ajo nxjerrim h₁.']
},
{
 facts:[
 ['Çka jepet për sipërfaqen?','S(h) = 2 − 0,1h','Nuk kemi një sipërfaqe të pandryshueshme. Teksti thotë që sipërfaqja ndryshon me lartësinë h sipas këtij funksioni.'],
 ['Deri në cilën lartësi ka material?','h = 4 m','Senzori ka matur lartësinë 4 metra. Vëllimin duhet ta gjejmë prej fundit, h = 0, deri në këtë lartësi.']
 ],ask:['Çka kërkohet?','V = ? m³','Pyetja kërkon vëllimin e materialit deri në nivelin e matur. Vëllimi matet në metra kub.'],
 why:['Pse nuk mjafton një shumëzim S · h?','V = ∫₀ʰ S(h) dh','Sipërfaqja ndryshon nga një lartësi në tjetrën. Prandaj mbledhim vëllimet e shtresave të holla me integral, ashtu si profesori.']
},
{
 facts:[
 ['Ku është mbështetja?','Pika A','Figura tregon pikën ku mbështetet sistemi. Largësitë e masave duhen matur nga A, jo nga skaji.'],
 ['Çka kemi në anën e majtë?','x në 4d; 11 g në 2d','Numëro ndarjet në figurë: masa x është katër ndarje larg A, kurse 11 g është dy ndarje larg.'],
 ['Çka kemi në anën e djathtë?','15 g në 2d; 21 g në 4d','Në të djathtë, masa 15 g është dy ndarje larg A dhe masa 21 g është katër ndarje larg.'],
 ['Çka do të thotë d?','d = një largësi e përbashkët','Të gjitha ndarjet janë të barabarta. Nuk na duhet një numër për d sepse faktori i përbashkët do të shkurtohet.']
 ],ask:['Çka duhet me gjetë?','x = ? g','Kërkohet masa që vendoset në pikën a për ta mbajtur sistemin në ekuilibër.'],
 why:['Pse përdorim momentet?','Shuma e momenteve majtas = shuma e momenteve djathtas','Nuk mjafton t’i mbledhim vetëm masat: rëndësi ka edhe largësia nga A. Për këtë arsye çdo masë shumëzohet me krahun e saj.']
},
{
 facts:[
 ['Çfarë diode kemi?','Ge; η = 1 në modelin e testit','Teksti thotë “diodës së germaniumit”. Profesori për këtë detyrë përdor parametrin η = 1.'],
 ['Sa është rryma e ngopjes?','Iₛ = 0,1 nA','Kjo është rryma e ngopjes që jepet në tekst. Nuk është rryma Iᴰ që na kërkohet. Nanoamper do të thotë 10⁻⁹ amper.'],
 ['Sa tension është aplikuar?','Uᴰ = 0,5 V','Në diodë është vendosur tensioni 0,5 volt. Ky tension hyn në eksponentin e formulës.'],
 ['Sa është temperatura?','T = 300 K','Temperatura është 300 kelvin. Na duhet për të llogaritur tensionin termik Uᵀ.']
 ],ask:['Cilën rrymë kërkojmë?','Iᴰ = ?','Duhet rryma që kalon në diodë kur i aplikohet tensioni i dhënë. E dallojmë nga Iₛ, që tashmë dihet.'],
 why:['Çka duhet gjetur para rrymës?','Së pari Uᵀ = kT/q; pastaj Iᴰ','Formula e diodës ka nevojë për Uᵀ. Meqë nuk jepet drejtpërdrejt, e llogaritim nga temperatura. Tash ndjekim krejt hapat e profesorit.']
},
{
 facts:[
 ['Cili element është dhënë?','Germaniumi: Ge','Pyetja ka të bëjë me strukturën atomike të germaniumit. Këtu nuk po llogarisim rrymën e një diode.'],
 ['Çka tregon vendi 32 në tabelën periodike?','Z = 32 → 32 elektrone në atom neutral','Numri atomik është 32. Për atomin neutral të detyrës, ky është edhe numri i përgjithshëm i elektroneve që duhet shpërndarë.']
 ],ask:['Çka duhet me gjetë?','Elektronet në secilën shtresë','Nuk kërkohet vetëm totali 32. Duhet të tregojmë sa elektrone janë në orbitën e parë, të dytë, të tretë dhe të katërt.'],
 why:['Si i ndjekim hapat e profesorit?','Kapaciteti i shtresës: 2n²; për Ge kontrollojmë shumën 32','Profesori llogarit 2, 8, 18 për tri shtresat e para dhe pastaj elektronet e mbetura. Ky është konfigurimi i Ge; 2n² jep kapacitetin maksimal dhe nuk është rregull i mjaftueshëm për mbushjen e çdo elementi.']
},
{
 facts:[
 ['Çfarë materiali dhe temperature kemi?','Si i pastër; T = 300 K','Kushtet janë silicium i pastër në 300 kelvin. Dendësitë që përdor profesori i përkasin këtyre kushteve.'],
 ['Për çfarë vëllimi po flasim?','V = 1 cm³','Pyetja flet për një centimetër kub. Duhet t’i krahasojmë atomet dhe elektronet brenda të njëjtit vëllim.'],
 ['Sa elektrone të lira kemi sipas zgjidhjes?','nᵢ = 1,5 · 10¹⁰ elektrone/cm³','Këtë të dhënë profesori e sjell nga vetitë e Si në 300 K; nuk është numër që nxirret vetëm nga teksti i pyetjes.'],
 ['Sa atome kemi sipas zgjidhjes?','nᴬ = 5 · 10²² atome/cm³','Edhe kjo dendësi jepet në zgjidhjen e profesorit për siliciumin. Tash i kemi dy numrat që do të krahasojmë.']
 ],ask:['Çfarë raporti kërkohet?','Sa atome ka për 1 elektron të lirë?','Fjalët “atome ndaj elektroneve të lira” na tregojnë rendin e pjesëtimit: atomet sipër, elektronet poshtë.'],
 why:['Pse pjesëtojmë?','Raporti = nᴬ/nᵢ','Për të ditur sa atome i takojnë një elektroni të lirë, e ndajmë numrin e atomeve me numrin e elektroneve. Nuk i mbledhim dhe nuk e kthejmë raportin mbrapsht.']
},
{
 facts:[
 ['Sa është rryma e ngopjes e secilës diodë?','Iₛ = 2 · 10⁻¹³ A','D₁, D₂ dhe D₃ kanë të njëjtën rrymë të ngopjes. Ky numër përdoret te formulat e të tri diodave.'],
 ['Çfarë tensioni duam në dalje?','Uᴰ = 0,6 V','Dalja duhet të jetë 0,6 volt. Meqë D₃ dhe rezistori janë paralel, ky është tensioni në të dy degët.'],
 ['Sa është rezistenca në skemë?','R = 1 kΩ = 1000 Ω','Rezistori në figurë është 1 kiloohm. Do të na duhet për rrymën Iᴿ = Uᴰ/R.'],
 ['Çfarë modeli përdor zgjidhja?','Ge; η = 1; T = 300 K','Pyetja thotë Ge; zgjidhja e profesorit përdor η = 1 dhe temperaturën 300 K për tensionin termik. Këto i dallojmë nga të dhënat e shkruara në pyetje.']
 ],ask:['Çka kërkohet: hyrja apo dalja?','Uᴴ = ? V','Dalja 0,6 V tashmë dihet. Kërkohet tensioni i hyrjes që e krijon atë dalje. Mos i ngatërro Uᴴ me Uᴰ.'],
 why:['Pse nuk mjafton të shtojmë një rënie fikse?','Rrymat → tensionet në D₁ dhe D₂ → Uᴴ','Profesori i llogarit tensionet e diodave nga rryma. Prandaj së pari gjejmë rrymat në dy degët paralele dhe i mbledhim. Gabimi numerik i PDF-së shënohet te hapi përkatës.']
},
{
 facts:[
 ['Sa është hyrja e parë?','E₁ = 10 V','Nga figura lexojmë burimin e parë 10 volt. Ai lidhet me diodën D₁.'],
 ['Sa është hyrja e dytë?','E₂ = 0 V','Hyrja e dytë është zero volt dhe lidhet me D₂. Gjendjen e saj e krahasojmë edhe me tensionin në dalje.'],
 ['Sa është rezistenca?','R = 1 kΩ','Rezistori lidh daljen me pikën e referimit. Pasi gjejmë tensionin në të, mund ta gjejmë rrymën.'],
 ['Çfarë diodash janë?','Si → profesori përdor 0,7 V kur dioda përçon','Si do të thotë silicium. Rënia 0,7 V është afrimi i modelit të përdorur në zgjidhje, jo numër i ri i shkruar në pyetje.']
 ],ask:['Cilat dy madhësi kërkohen?','U₀ = ? V; I = ? A','Duhet tensioni në dalje dhe rryma që kalon në rezistor. Më parë duhet të kuptojmë cila diodë përçon.'],
 why:['Me çka fillojmë?','Gjendja e diodave → U₀ → I','Nuk përdorim menjëherë U/R sepse ende nuk e dimë U₀. Së pari gjejmë rrugën aktive nga hyrja te dalja.']
},
{
 facts:[
 ['Sa është tensioni i burimit?','U = 8 V','Burimi jep 8 volt. Një pjesë bie në LED dhe pjesa tjetër në rezistor.'],
 ['Sa tension ka secili LED kur përçon?','Uᴿᴱᴰ = Uᴳᴿᴱᴱᴺ = 2 V','Të dy LED-et kanë rënie 2 volt sipas të dhënave. Prandaj mund t’i kontrollojmë të dy polaritetet me të njëjtat vlera.'],
 ['Sa rrymë lejohet?','I = 20 mA','Rezistori duhet ta kufizojë rrymën në 20 miliamper. Ky është kufiri që përdorim për llogaritjen e R.'],
 ['Sa është tensioni i shpimit?','Uᵦᵣₑₐₖ = 3 V për secilin LED','Kjo vlerë shërben për kontrollin e LED-it që bllokon. Nuk e zëvendëson rënien 2 V të LED-it që përçon.'],
 ['Cili LED duhet të ndriçojë?','Pozitiv: i gjelbër; i kundërt: i kuq','Këto role janë dhënë në tekst. Profesori e analizon qarkun për secilin polaritet veçmas.']
 ],ask:['Çka duhet me gjetë?','R = ? Ω','Pyetja kërkon rezistencën në ohm që kufizon rrymën. Më pas duhet kontrolluar që LED-i bllokues të mos arrijë shpimin.'],
 why:['Pse e zbresim tensionin e LED-it?','U = R·I + Uᴸᴱᴰ','Burimi ndahet në dy rënie tensioni. Rezistori nuk i merr krejt 8 V: fillimisht zbriten 2 V që bien në LED-in që përçon.']
}
];

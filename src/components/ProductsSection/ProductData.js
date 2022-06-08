export const ProductData = [
    {
        name: 'AT-4',
        id: '1',
        type: 'heater',
        img: require("../../images/5.jpg"),
        power: '4',
        voltage: '220',
        consume: '18',
        intake: '20',
        wireing: '3x2,5',
        length: '45-170',
        weight: '1,6',
        area: '50-70',
    },
    {
        name: 'AT-6',
        id: '2',
        type: 'heater',
        img: require("../../images/5.jpg"),
        power: '6',
        voltage: '2x220',
        consume: '2x14',
        intake: '2x16, 3x10',
        wireing: '5x2,5',
        length: '60-190',
        weight: '2,0',
        area: '70-90',
    },
    {
        name: 'AT-8',
        id: '3',
        type: 'heater',
        img: require("../../images/5.jpg"),
        power: '8',
        voltage: '3x220',
        consume: '3x14',
        intake: '3x16',
        wireing: '5x4',
        length: '250',
        weight: '2,6',
        area: '110-140',
    },
    {
        name: 'AT-12',
        id: '4',
        type: 'heater',
        img: require("../../images/5.jpg"),
        power: '12',
        voltage: '3x220',
        consume: '3x18',
        intake: '3x25',
        wireing: '5x4',
        length: '340',
        weight: '3,8',
        area: '150-180',
    },
    {
        name_hu: `„AT” rendszer Alapvezérlése`,
        name_ro: `Controlul de bază al sistemului „AT”`,
        id: '5',
        type: 'controller',
        img: require('../../images/svg2.svg').default,
        desc1_hu: `Az „AT” Alapvezérlő biztosítja a Fűtőmodul biztonságos üzemeltetésének a feltételeit, úgy, hogy a
        fűtés rendszer műszaki állapotától függetlenül védi a fűtőmodult az esetleges károsodástól. Az éves
        karbantartás a Fűtőmodul és fűtés rendszer összehangolt működése miatt garanciális feltétel.
        A vezérlés úgy működik, hogy fogadja a rákötött (nem tartozék) termosztát indító jelét, és először
        bekapcsolja a keringető szivattyút, majd néhány másodperc múlva engedélyezi a fűtést, és
        megkezdődik a víz melegítése. Állítható az előremenő és a visszatérő ágban a víz maximális
        hőmérséklete. A beállított hőmérséklet határ (akár a termosztát, akár az előre, vagy visszatérő víz-
        hőmérséklet) elérésekor a Vezérlő először lekapcsolja az elektromos hálózatról a Fűtőmodult, majd
        időkésleltetés után kapcsolja ki a szivattyút.`,
        desc2_hu: `Amikor Használati Meleg Vizet (HMV) állít elő a rendszer, ott külön állítható a maximális víz-
        hőmérséklet.`,
        desc1_ro: `Controlerul de bază „AT” asigură condițiile de funcționare în siguranță a modulului de încălzire prin
        protejarea de supraîncălzire și împotriva deteriorării indiferent de starea tehnică a sistemului de
        încălzire. Întreținerea anuală este o condiție de garanție datorită funcționării coordonate a modulului
        de încălzire și Sistem de încălzire. Controlul funcționează prin primirea semnalului de pornire al
        termostatului conectat și mai întâi pornirea pompei de circulație, apoi după câteva secunde se
        activează încălzirea și pornește încălzirea apei. Temperatura maximă a apei în ramură de tur și retur
        poate fi reglată. Când se atinge limita de temperatură setată (fie termostatul, fie temperatura apei pe
        tur sau pe retur), regulatorul deconectează mai întâi modulul de încălzire de la rețea și apoi oprește
        pompa după o întârziere.`,
        desc2_ro: `Când este produsă apă caldă menajeră (ACM), temperatura maximă a apei poate fi setată separat.`,
    },
];

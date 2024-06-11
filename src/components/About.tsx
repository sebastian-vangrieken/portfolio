import ImageCarousel from "./ImageCarousel";

const images: string[] = [
    "./vakantie1.jpg",
    "./vakantie2.jpg",
    "./vakantie3.jpg",
    "./vakantie4.jpg",
]

function About() {
    return (
        <div id="about" className="flex flex-col items-end pb-44">
            <h1 className="text-3xl mb-12">
                <span className="border-b-4 border-highlightl dark:border-highlightd">Over <span className="font-bold">Mij</span></span>
            </h1>
            <p className="flex-wrap w-3/4">
                Ik ben een 21-jarige student Toegepaste Informatica aan De Thomas More hogeschool in Geel.
                Ik heb een breed interesseveld en dat wordt elke dag groter. Ik beschouw mijzelf als een full-stack developer, ik werk graag aan front & back-end met een kleine voorkeur naar back-end.
                Ik ben leergierig en ben altijd bereid om bij te leren.
            </p>
            <br />
            <p className="flex-wrap w-3/4">
                Buiten school ben ik altijd in beweging. Ik speel al heel mijn leven tennis, en sinds een paar jaar geef ik ook les aan de jongste spelers. 
                Naast tennis heb ik sinds dit jaar ook lopen opgenomen. In april heb ik al meegedaan aan de 10 miles in Antwerpen, en een marathon staat ook al ingepland voor dit jaar.
            </p>
            <br />
            <p className="flex-wrap w-3/4">
                Sinds ik klein ben ga ik ook elk jaar naar de Oostenrijkse alpen. Hier ga ik elk jaar wandelen, en sinds een paar jaar ook skien.
                Ik hou van de natuur hier, en kan even tot rust komen.
            </p>
            <ImageCarousel images={images} />
        </div>
    )
}

export default About;
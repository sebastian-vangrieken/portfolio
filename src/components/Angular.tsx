import ImageCarousel from "./ImageCarousel";

function Angular() {
    return (
        <div id="angular" className="flex flex-col items-end pb-44">
            <h1 className="text-3xl font-bold border-b-4 w-fit mb-12 border-highlightl dark:border-highlightd">
                Angular project
            </h1>
            <p className="flex-wrap w-3/4">
                Voor het vak angular hebben we de opdracht gekregen om een web applicatie te maken waarop we een reis kunnen plannen.
                Voor deze opdracht kregen we heel de semester de tijd om een reisplanner te maken met angular en een back-end naar keuzen.
                Doorheen het semester kregen we hulp van de leerkracht en 2 professionele angular developers.
                Mijn contributie aan het project was vooral back-end gericht. Ik heb de basic crud van de .NET back-end opgezet. Daarna heb ik ook gewerkt aan de authentication voor de front en back-end met auth0. 
                Op het einde van het semester heeft elk team zichzelf verdedigd tegenover een jurie, en ik mag blij zijn om te zeggen dat het team waar ik bijhoorde eerst uitkwamen.
            </p>
            <br />
            <ImageCarousel />
        </div>
    )
}

export default Angular;
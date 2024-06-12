function Stage() {
    return (
        <div id="stage" className="flex flex-col items-end pb-44">
            <h1 className="text-3xl font-bold w-fit mb-12">
                Stage: <span className="border-b-4 border-highlightl dark:border-highlightd">Chargehub</span>
            </h1>
            <div className="grid grid-cols-[1fr_2fr]">
                <h1 className="text-2xl font-bold">Stage plek:</h1>
                <div>
                    <p className="flex-wrap ms-auto">
                        Voor mijn stage heb ik 14 weken mogen werken bij <a href="https://wisemen.digital/" className="text-wisemenGeel font-semibold" target="_blank">Wisemen</a> in Diepenbeek.
                        Zij zijn een digital agency dat zich specialiseert in: marketing, design en development. Hier ben ik begeleid door 2 android developers.
                        Na een onboarding om bekent te geraken met android development, en hoe zie hun projecten aanpakken ben ik aan mijn stage project kunnen gebinnen.
                    </p>
                    <div className="w-full h-8 mb-8 border-b-2 border-highlightl dark:border-highlightd"></div>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr]">
                <h1 className="text-2xl font-bold">Opdracht:</h1>
                <div>
                    <p className="flex-wrap ms-auto">
                        Mijn stage opdracht, die ik samen met een medenstudent van de Thomas More heb gemaak, bestond uit 2 onderdelen.
                        Eenderzijds moest we onderzoek doen naar kotlin multiplatform, en dit onderzoek documenteren zodat de developers bij wisemen hier verder op konden bouwen.
                        Anderzijds moest ik deze onderzoeks kennis toepassen in een project. De applicatie die we hebben gemaakt moest een probleem binnen hun bedrijf oplossen.
                        Ze hadden namelijk geen regeling in verband met het gebruik van de laadpalen voor hun elektrische auto's.
                        De applicatie die wij hiervoor hebben gemaakt, maakte het mogelijk voor medewerkers van wisemen om een laadpaal te reserveren voor een bepaalde tijd.
                        Mijn stage opdracht bestondt dus uit 2 delen, waarvan de nadruk vooral op het research gedeelte lag.
                    </p>
                    <div className="w-full h-8 mb-8 border-b-2 border-highlightl dark:border-highlightd"></div>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr]">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Mijn contributie:</h1>
                    <p className="my-1"><a href="./realisatie-document-stage-wisemen.pdf" target="_blank" className="font-semibold text-highlightl dark:text-highlightd">Realisatie document</a></p>
                    <p className="my-1"><a href="./stage_reflectie.pdf" target="_blank" className="font-semibold text-highlightl dark:text-highlightd">Reflectie</a></p>
                </div>
                <div>
                    <p className="flex-wrap ms-auto">
                        In diepgaande uitleg over mijn research en het project ga je hier niet krijgen, mocht je hier in geinteresseerd zijn dan kun je altijd mijn realisatie document bekijken.
                        Voor meer technische uitleg kun je refereer ik je ook graag naar deze <a href="https://github.com/ChargeHub-Stage/Charge-Hub/wiki" target="_blank" className="text-highlightl dark:text-highlightd font-semibold">github wiki</a>.
                        Wat ik heb concreet gedaan, ik en mijn collega zijn samen begonnen met individueel onderzoek te doen naar kotlin multiplatform.
                        Wanneer we beiden genoeg kennis hadden opgedaan zijn we begonnen met de architectuur van de applicatie op te splitsen, en hebben we elk onderzocht hoe we die konden implementeren in kotlin multiplatform.
                    </p>
                    <br />
                    <p>
                        Ik heb hier gewerkt aan de integratie van Firebase in onze applicatie. Wij hebben er samen voor gekozen om firebase te gebruiken als database, en voor authenticatie.
                        Dit bleek een goede keuze te zijn, niet alleen omdat Wisemen hier al met werkte, maar ook omdat firebase een goede integratie heeft met kotlin multiplatform.
                        Met de basis van Firebase werkende in onze applicatie ben ik begonnen aan de login pagina, hierna heb ik ook de functionaliteit toegevoegd om een wachtwoord de veranderen.
                        Na dat dit werkte heb ik een de kalender pagina op mij genomen, dit leek op de moment zelf een zeer voor de hand liggend scherm, maar dit bleek achteraf toch niet te zijn.
                        Na de kalender heb ik nog kort researcg gedaan en gewerkt aan biometrische authenticatie, maar dit is spijtig genoeg niet af geraakt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stage;
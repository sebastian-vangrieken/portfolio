function UnrealEngine() {
    return (
        <div id="unreal" className="pb-20">
            <h1 className="text-3xl font-bold border-b-4 w-fit mb-12 border-highlightl dark:border-highlightd">
                Unreal engine cursus
            </h1>
            <div className="grid grid-cols-2">
                <p className="me-4">
                    Voor het vak profecional skills in het 3de jaar heb ik de opdracht gekregen om een cursus te volgen naar keuzen. 
                    Hiervoor heb ik gekozen om een beetje uit mijn confort zone te stappen en een cursus te volgen over game development met <span className="font-semibold">Unreal Engine</span>.
                    Ik was en ben nog altijd geinteresseerd in game development, en dit was de perfecte kans om hier meer over te leren.
                    De udemy cursus was gemaakt voor mensen die practisch geen ervaring met programmeren hebben, dit maakte dat alles zeer goed werdt uitgelegd.
                    De cursus was opgedeeld in 5 hoofdstukken, in elk hoofdstuk werd een kleine game gemaakt. De korte video clip die je hiernaast ziet behoord tot het eerste hoofdstuk.
                    De cursus is simpel begonnen met een simpele game zonder doel, waar je projectielen kan schieten die met andere objecten kunnen in contact komen.
                    Dit hoofdstuk maakte ook nog niet gebruik van C++ code, maar van functie blokken zoals in scratch.
                </p>
                <video width="100%" height={100} controls className="border-4 rounded-md 
                border-highlightl dark:border-highlightd"
                >
                    <source src="./warehouse_wrackage.mp4" type="video/mp4" />
                    Video kan niet worden afgespeeld
                </video>
            </div>
            <br />
            <div className="grid grid-cols-2">
                <video width="100%" height={100} controls className="border-4 rounded-md 
                border-highlightl dark:border-highlightd"
                >
                    <source src="./simple_shooter.mp4" type="video/mp4" />
                    Video kan niet worden afgespeeld
                </video>
                <div>
                    <p className="ms-4">
                        Bij elk hoofdstuk werden er nieuwe concepten van game development aangeleerd. Zoals je wel verwacht van een cursus van 30 uur heb ik zeker ook nog niet alles geleerd.
                        De cursus ging vooral over de basis en programmeerbare concepten. Ik vondt het een heel interessant project, en ben blij deze cursus gevolgd te hebben.
                    </p>
                    <br />
                    <p className="ms-4">
                        Voor geinteresseerde, de exacte udemy cursus die ik gevolgd heb vindt u hier: <a href="https://www.udemy.com/course/unrealcourse/?couponCode=JUST4U02223" target="_blank" 
                        className="font-bold text-highlightl dark:text-highlightd"
                        > 
                            Unreal Engine 5 C++ development
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UnrealEngine
import React, {useState} from 'react';
import "./coockies.css";

export default function Cookies() {
    const [acceptedCookies, setAcceptedCookies] = useState(false);

    function acceptCookies() {
        setAcceptedCookies(true);
        localStorage.setItem('acceptedCookies', true); // save acceptance to localStorage

    }
    const [showCookiePopup, setShowCookiePopup] = useState(false);

    function handleAccept() {
        // save the user's cookie preferences and close the popup
        setShowCookiePopup(false);
    }
    if (!acceptedCookies && !localStorage.getItem('acceptedCookies')) {
        return (
            <div>
                <div className="cookies-overlay"/>
                <div className="cookies-alert">
                    <p>
                        Zusätzlich zu den Cookies, die für den Betrieb dieser Website unbedingt erforderlich sind,
                        verwendet Portfolio Cookies
                        , um sich an Ihre Präferenzen zu erinnern und Ihnen zusätzliche Dienste vorzuschlagen, um die
                        Leistung unserer Website zu
                        messen, um unser Verständnis Ihrer Interessen zu verbessern und, um Ihnen
                        Warenkorbbenachrichtigungen zu senden. Unsere Partner
                        verwenden Tracker, um personalisierte Werbung basierend auf Ihren Surfgewohnheiten und Ihrem
                        Profil, auch durch Profilerstellung, zu platzieren.
                        Weitere Informationen zu diesen Technologien und ihrer Verwendung auf dieser Website finden Sie
                        in unserer <a href="#" onClick={() => setShowCookiePopup(true)}>Cookie-Richtlinie</a>
                    </p>
                    {showCookiePopup && (
                        <div className="cookie-popup">
                            <div className="cookie-popup-content">
                                <h1>Cookie-Richtlinie</h1>
                                <p>
                                    Cookie-Richtlinie

                                    Diese Cookie-Richtlinie beschreibt, wie wir auf unserer Website Cookies verwenden. Bitte lesen Sie diese Richtlinie sorgfältig durch, um zu verstehen, welche Arten von Cookies wir verwenden, wie wir sie verwenden und wie Sie sie steuern können.

                                    Was sind Cookies?

                                    Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Cookies ermöglichen es einer Website, Ihren Browser zu erkennen und bestimmte Informationen zu speichern, um Ihre Erfahrung auf der Website zu verbessern.

                                    Welche Arten von Cookies verwenden wir?

                                    Wir verwenden auf unserer Website verschiedene Arten von Cookies:


                                    Wie können Sie Cookies steuern?

                                    Sie haben die Möglichkeit, Cookies zu akzeptieren oder abzulehnen. Die meisten Webbrowser akzeptieren Cookies automatisch, aber Sie können normalerweise Ihre Browsereinstellungen ändern, um Cookies abzulehnen, wenn Sie dies bevorzugen. Wenn Sie Cookies ablehnen, können bestimmte Funktionen unserer Website möglicherweise nicht ordnungsgemäß funktionieren.

                                    Wie lange werden Cookies gespeichert?

                                    Die meisten Cookies werden nach dem Ende Ihrer Browsersitzung automatisch gelöscht (sogenannte Sitzungs-Cookies). Andere Cookies bleiben auf Ihrem Gerät gespeichert, bis sie ablaufen oder Sie sie löschen.

                                    Änderungen an dieser Richtlinie

                                    Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Bitte überprüfen Sie regelmäßig diese Richtlinie, um sicherzustellen, dass Sie mit den Änderungen einverstanden sind.

                                    Bitte beachten Sie, dass diese Richtlinie lediglich als Vorlage dient und dass Sie je nach Bedarf Anpassungen vornehmen müssen, um den Anforderungen Ihrer Website oder Ihrer Organisation gerecht zu werden. Zudem empfehle ich Ihnen, diese Richtlinie von einem Anwalt oder einer anderen autorisierten Stelle prüfen zu lassen, um sicherzustellen, dass sie alle rechtlichen Anforderungen erfüllt.

                                </p>
                                <ol>
                                    <li>
                                        <b>Notwendige Cookies</b>: Diese Cookies sind unerlässlich für den Betrieb unserer Website. Ohne sie können wir Ihnen bestimmte Dienste nicht anbieten. Diese Cookies erfassen keine persönlichen Informationen.
                                    </li>
                                    <li>
                                        <b>Funktionscookies</b>: Diese Cookies ermöglichen es uns, uns an Ihre Präferenzen zu erinnern und Ihnen personalisierte Inhalte und Funktionen anzubieten. Diese Cookies erfassen keine persönlichen Informationen.
                                    </li>
                                    <li>
                                        <b>Analyse-Cookies</b>: Diese Cookies werden verwendet, um Informationen darüber zu sammeln, wie Besucher unsere Website nutzen. Wir verwenden diese Informationen, um die Leistung unserer Website zu verbessern und Ihnen relevante Inhalte und Angebote anzubieten.
                                    </li>
                                    <li>
                                        <b>Werbe-Cookies</b>  : Entscheiden Sie, ob Sie Werbe-Cookies aktivieren möchten, die es uns und unseren Partnern ermöglichen, personalisierte Werbung auf Basis Ihrer Interessen und Ihres Surfverhaltens anzuzeigen. Diese Cookies können auch dazu beitragen, dass wir Ihre Interessen besser verstehen und Ihnen relevantere Inhalte und Angebote anbieten können.
                                    </li>
                                    <li>
                                        <b>Cookie-Zustimmung</b>: Überprüfen Sie, ob die Cookie-Zustimmung ordnungsgemäß erteilt wurde und ob die Cookie-Einstellungen korrekt gespeichert wurden. Stellen Sie sicher, dass die Besucher der Website die Möglichkeit haben, ihre Cookie-Einstellungen jederzeit zu ändern oder zu widerrufen.
                                    </li>
                                    <li>
                                        <b>Datenschutzrichtlinie:</b> Überprüfen Sie, ob Ihre Datenschutzrichtlinie aktualisiert wurde, um die Verwendung von Cookies auf der Website zu erklären. Stellen Sie sicher, dass die Datenschutzrichtlinie klare Informationen darüber enthält, welche Arten von Cookies auf der Website verwendet werden und wie diese Cookies verwendet werden.
                                    </li>
                                    <li>
                                        <b> DSGVO-Konformität:</b>Überprüfen Sie, ob Ihre Datenschutzrichtlinie aktualisiert wurde, um die Verwendung von Cookies auf der Website zu erklären. Stellen Sie sicher, dass die Datenschutzrichtlinie klare Informationen darüber enthält, welche Arten von Cookies auf der Website verwendet werden und wie diese Cookies verwendet werden.
                                    </li>
                                </ol>
                                <button onClick={handleAccept}>Accept</button>
                            </div>
                        </div>
                    )}
                    <button id="s-cookies" onClick={() => setAcceptedCookies(true)}>Keine Cookies</button>
                    <button id="t-cookies" onClick={() => setAcceptedCookies(true)}>Nur technische Cookies akzeptieren
                    </button>
                    <button id="a-cookies" onClick={acceptCookies}>Alle Cookies akzeptieren</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}


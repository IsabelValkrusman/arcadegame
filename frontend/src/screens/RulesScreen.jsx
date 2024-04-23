import React from 'react';
import { useParams } from 'react-router-dom';

const RulesScreen = () => {
    const { id } = useParams();

    // Siin saate kasutada id väärtust vastavalt vajadusele, nt päringu tegemiseks serverisse
    // või vastavate hindade kuvamiseks

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="info-box">
                        <h1>Reeglid</h1>
                        <div className="info-container">
                            <p>
                                <strong>Mängukeskuse reeglid:</strong>
                                <br />
                                1. Palun hoidke mängukeskuses puhtust ja korrasolekut.
                                <br />
                                2. Lastele alla 12-aastased peavad olema täiskasvanu järelevalve all.
                                <br />
                                3. Ärge tarbige sööki ega jooke mänguautomaatide läheduses.
                                <br />
                                4. Palun järgige mängukeskuse töötajate juhiseid ja ohutusnõudeid.
                                <br />
                                5. Rikkumise korral võib mängukeskuse personal keelduda teenuse osutamisest või külastajat mängukeskusest eemaldada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesScreen;

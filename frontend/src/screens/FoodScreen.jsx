import React from 'react';
import { useParams } from 'react-router-dom';

const FoodScreen = () => {
    const { id } = useParams();

    // Siin saate kasutada id väärtust vastavalt vajadusele, nt päringu tegemiseks serverisse
    // või vastavate hindade kuvamiseks

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="info-box">
                        <h1>Toitlustus</h1>
                        <div className="info-container">
                            <p>
                                <strong>KOHVIK on avatud kell 11.00 – 18.45</strong>
                                <br />
                                Meie suure terassiga kohvikus pakume külastajatele tassi värsket kohvi, teed, karastusjooke, mahla ning jäätisekokteile. Valikust võib leida ka maitsvaid saiakesi, paninisid ja pannkooke.
                                <br />
                                Tasuda saab nii sularahas kui ka pangakaardiga.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodScreen;

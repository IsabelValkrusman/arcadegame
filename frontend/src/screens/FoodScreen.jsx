import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

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
                                <strong>Baar on avatud 24/7</strong>
                                <br />
                                <br />
                                    	Tere tulemast meie hubasesse baari, kus saad nautida parimat fastfoodi ja maitsevaid kokteile! Meie mitmekülgne menüü pakub midagi igaühele, alustades hõrgutavatest burgeritest ja krõbedatest kanatükkidest kuni värske salati ja wrapideni. Meie kokteilivalik on samuti muljetavaldav, kus leiad klassikalised lemmikud nagu mojito ja margarita ning ka põnevad uuenduslikud segud. Lisaks pakume ka alkoholivabu alternatiive ja spetsiaalseid jooke, mis sobivad ideaalselt igale maitsele.
                                        <br />
                                        Meie baar on ideaalne koht nii lõõgastavateks õhtusöökideks sõpradega kui ka kiireteks eineteks pärast pikka tööpäeva. Meie sõbralik ja külalislahke personal tagab alati meeldiva kogemuse ning aitab sul valida just sinu maitsele vastavaid roogasid ja jooke.
                                        <br />
                                        Lisaks maitseelamustele pakume ka meeldivat atmosfääri ja mugavaid istekohti nii siseruumides kui ka väljas terrassil, kus saab nautida värske õhu ja linnamelu võlusid. Üheskoos loome me meeldejääva kogemuse, mis jääb meelde veel kauaks pärast lahkumist. 
                                        <br />
                                        Tule külasta meid ja avasta uusi maitseid meie lahedas baaris! 
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

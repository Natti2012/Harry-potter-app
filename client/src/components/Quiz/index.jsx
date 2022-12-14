import './Quiz.scss';
import bus from '../../images/nightBus.gif';
import gryffindor from '../../images/gryffindor.png';
import slytherin from '../../images/slytherin.png';
import ravenclaw from '../../images/ravenclaw.png';
import hufflepuff from '../../images/hufflepuff.png';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourQuestion from './FourQuestion';
import FiveQuestion from './FiveQuestion';
import SixQuestion from './SixQuestion';
import SevenQuestion from './sevenQuestion';
import EightQuestion from './EightQuestion';
import NineQuestion from './NineQuestion';
import TenQuestion from './TenQuestion';
import ButtonResponse from './ButtonResponse';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Quiz = (props) => {
    const [classroom, setClassroom] = useState(' ');
    const [pet, setPet] = useState(' ');
    const [invention, setInvention] = useState('');
    const [spell, setSpell] = useState('');
    const [teacher, setTeacher] = useState('');
    const [sweet, setSweet] = useState('');
    const [object, setObject] = useState('');
    const [protect, setProtect] = useState('');
    const [qualitie, setQualitie] = useState('');
    const [transport, setTransport] = useState('');

    // atributos para contadores de la capa oculta de la red neuronal
    const [bravery, setBravery] = useState(0);
    const [friendship, setFriendship] = useState(0);
    const [honour, setHonour] = useState(0);
    const [cunning, setCunning] = useState(0); //astucia
    const [ambition, setAmbition] = useState(0);
    const [witness, setWitness] = useState(0);
    const [intelligence, setIntelligence] = useState(0);
    const [justice, setJustice] = useState(0);
    const [competition, setCompetition] = useState(0);
    const [loyality, setLoyality] = useState(0);
    const [hardWork, setHardWork] = useState(0);

    const [gryffindorHTML, setGryffindorHTML] = useState('hidden');
    const [slytherinHTML, setSlytherinHTML] = useState('hidden');
    const [ravenclawHTML, setRavenclawHTML] = useState('hidden');
    const [hufflepuffHTML, setHufflepufHTML] = useState('hidden');
    const [textRequired, setTextRequired] = useState('hidden');
    const handlePet = (ev) => {
        setPet(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'lechuza':
                setCunning(cunning + 1);
                setWitness(witness + 1);
                setIntelligence(intelligence + 1);
                setJustice(justice + 1);

                break;
            case 'rata':
                setCunning(cunning + 1);
                setCompetition(competition + 1);
                setHardWork(hardWork + 1);
                setHardWork(friendship + 1);
                setAmbition(ambition + 1);
                break;
            case 'gato':
                setBravery(bravery + 1);
                setFriendship(friendship + 1);
                setAmbition(ambition + 1);
                setHardWork(hardWork + 1);
                break;
            case 'sapo':
                setFriendship(friendship + 1);
                setJustice(justice + 1);
                setHardWork(hardWork + 1);
                setHonour(honour + 1);
                setCunning(cunning + 1);
                break;

            default:
                break;
        }
    };

    const handleclassroom = (ev) => {
        setClassroom(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'defensa contra las artes oscuras':
                setWitness(witness + 1);
                setCunning(cunning + 1);
                setAmbition(ambition + 1);
                setBravery(bravery + 1);
                setHonour(honour + 1);
                setIntelligence(intelligence + 1);
                setJustice(justice + 1);
                break;
            case 'pociones':
                setAmbition(ambition + 1);
                setIntelligence(intelligence + 1);
                setHardWork(hardWork + 1);
                setCunning(cunning + 1);
                setWitness(witness + 1);
                break;
            case 'cuidado de criaturas m??gicas':
                setBravery(bravery + 1);
                setFriendship(friendship + 1);
                setHardWork(hardWork + 1);
                setHardWork(hardWork + 1);
                break;
            case 'herbolog??a':
                setFriendship(friendship + 1);
                setWitness(witness + 1);
                setHardWork(hardWork + 1);
                setIntelligence(intelligence + 1);
                break;
            case 'adivinaci??n':
                setCunning(cunning + 1);
                setCompetition(competition + 1);
                setAmbition(ambition + 1);
                break;
            default:
                break;
        }
    };

    const handleInvention = (ev) => {
        setInvention(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Turr??n de hemorragia nasal':
                setBravery(bravery + 1);
                break;
            case 'Orejas extensibles':
                setCunning(cunning + 1);
                setIntelligence(intelligence + 1);
                setAmbition(ambition + 1);
                break;
            case 'Pantano port??til':
                setHardWork(hardWork + 1);
                setBravery(bravery + 1);
                break;
            case 'Filtro de amor':
                setFriendship(friendship + 1);
                setJustice(justice + 1);
                setCunning(cunning + 1);
                break;
            default:
                break;
        }
    };
    const handleSpell = (ev) => {
        setSpell(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Imperio':
                setCunning(cunning + 1);
                setWitness(witness + 1);
                setAmbition(ambition + 1);
                break;
            case 'Bombarda':
                setBravery(bravery + 1);
                setHonour(honour + 1);
                setJustice(justice + 1);
                break;
            case 'Obliviate':
                setIntelligence(intelligence + 1);
                setCompetition(competition + 1);
                setCunning(cunning + 1);
                break;
            case 'Desmaius':
                setJustice(justice + 1);
                setHardWork(hardWork + 1);
                break;
            case 'Expecto Patronum':
                setFriendship(friendship + 1);
                setHardWork(hardWork + 1);
                setHonour(honour + 1);
                break;
            case 'Accio':
                setCompetition(competition + 1);
                setAmbition(ambition + 1);
                setCunning(cunning + 1);
                setJustice(justice + 1);
                break;
            default:
                break;
        }
    };
    const handleTeacher = (ev) => {
        setTeacher(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Rubeus hagrid':
                setBravery(bravery + 1);
                setFriendship(friendship + 1);
                setHardWork(hardWork + 1);
                break;
            case 'Minerva McGonagall':
                setIntelligence(intelligence + 1);
                setHonour(honour + 1);
                setJustice(justice + 1);
                setAmbition(ambition + 1);
                break;
            case 'Albus Dumbledore':
                setBravery(bravery + 1);
                setAmbition(ambition + 1);
                setIntelligence(intelligence + 1);
                setCunning(cunning + 1);
                break;
            case 'Ojoloco Moody':
                setWitness(witness + 1);
                setJustice(justice + 1);
                setHardWork(hardWork + 1);
                setAmbition(ambition + 1);
                break;
            case 'Severus Snape':
                setCunning(cunning + 1);
                setAmbition(ambition + 1);
                setWitness(witness + 1);
                break;
            case 'Remus Lupin':
                setBravery(bravery + 1);
                setFriendship(friendship + 1);
                setHonour(honour + 1);
                break;
            case 'Sybill Trelawney':
                setWitness(witness + 1);
                setCompetition(competition + 1);
                setAmbition(ambition + 1);
                break;
            default:
                break;
        }
    };
    const handleSweet = (ev) => {
        setSweet(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Zumo de calabaza':
                setFriendship(friendship + 1);
                break;
            case 'Ranas de chocolate':
                setIntelligence(intelligence + 1);
                break;
            case 'Babosas de gelatina':
                setHardWork(hardWork + 1);
                break;
            case 'Grageas Bertie Bott':
                setBravery(bravery + 1);
                break;
            default:
                break;
        }
    };
    const handleObject = (ev) => {
        setObject(ev.target.value);
        const value = ev.target.value;
        console.log(ev.target.id);
        console.log(value);
        switch (value) {
            case 'Giratiempos':
                setAmbition(ambition + 1);
                setHardWork(hardWork + 1);
                setCunning(cunning + 1);
                break;
            case 'Poci??n Felix Felicis':
                setJustice(justice + 1);
                setHardWork(hardWork + 1);
                setFriendship(friendship + 1);
                setAmbition(ambition + 1);
                break;
            case 'Recordadora':
                setJustice(justice + 1);
                setHonour(honour + 1);
                break;
            case 'Mapa del merodeador':
                setWitness(witness + 1);
                setCunning(cunning + 1);
                setAmbition(ambition + 1);
                break;
            case 'Capa de invisibilidad':
                setCunning(cunning + 1);
                setWitness(witness + 1);
                setAmbition(ambition + 1);
                break;
            default:
                break;
        }
    };
    const handleProtect = (ev) => {
        setProtect(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Hermione':
                setAmbition(ambition + 1);
                setFriendship(friendship + 1);
                setHonour(honour + 1);
                setIntelligence(intelligence + 1);
                setJustice(justice + 1);
                setHardWork(hardWork + 1);
                break;
            case 'Dumbledore':
                setHonour(honour + 1);
                setHardWork(hardWork + 1);
                setCompetition(competition + 1);
                setAmbition(ambition + 1);
                setCunning(cunning + 1);
                break;
            case 'Sirius':
                setJustice(justice + 1);
                setHonour(honour + 1);
                setFriendship(friendship + 1);
                setHardWork(hardWork + 1);
                break;
            case 'Snape':
                setCunning(cunning + 1);
                setAmbition(ambition + 1);
                setCompetition(competition + 1);
                setWitness(witness + 1);
                break;
            case 'McGonagall':
                setIntelligence(intelligence + 1);
                setCompetition(competition + 1);
                setHardWork(hardWork + 1);
                setBravery(bravery + 1);
                setAmbition(ambition + 1);
                break;
            default:
                break;
        }
    };
    const handleQualities = (ev) => {
        setQualitie(ev.target.value);
        const value = ev.target.value;
        console.log(value);
        switch (value) {
            case 'Ambici??n, astucia y determinaci??n':
                setAmbition(ambition + 1);
                setCunning(cunning + 1);
                setHardWork(hardWork + 1);
                break;
            case 'Osad??a, valent??a y lealtad':
                setBravery(bravery + 1);
                setHardWork(hardWork + 1);
                setFriendship(friendship + 1);
                break;
            case 'Originalidad, ingenio e inteligencia':
                setWitness(witness + 1);
                setIntelligence(intelligence + 1);
                setCompetition(competition + 1);
                break;
            case 'Honestidad, trabajo duro y paciencia':
                setHonour(honour + 1);
                setHardWork(hardWork + 1);
                setJustice(competition + 1);

                break;
            default:
                break;
        }
    };
    const handleTransport = (ev) => {
        setTransport(ev.target.value);
        const value = ev.target.value;
        switch (value) {
            case 'Escoba':
                setHardWork(hardWork + 1);
                setHonour(honour + 1);
                setBravery(bravery + 1);
                break;
            case 'Coche volador':
                setAmbition(ambition + 1);
                setWitness(witness + 1);
                setFriendship(friendship + 1);
                setCompetition(competition + 1);
                break;
            case 'Thestral':
                setIntelligence(intelligence + 1);
                setBravery(bravery + 1);
                setHardWork(hardWork + 1);
                setWitness(witness + 1);
                break;
            case 'Polvos Flu':
                setWitness(witness + 1);
                setCompetition(competition + 1);
                setIntelligence(intelligence + 1);
                break;
            case 'Hipogrifo':
                setFriendship(friendship + 1);
                setBravery(bravery + 1);
                setLoyality(loyality + 1);
                setJustice(justice + 1);
                setCompetition(competition + 1);
                break;
            default:
                break;
        }
    };

    const handleButton = () => {
        indexHouse();
    };
    let gryffindorPoints = bravery + friendship + honour;
    let slytherinPoints = cunning + ambition;
    let ravenclawPoints = intelligence + competition + witness;
    let hufflepuffPoints = justice + loyality + hardWork;
    console.log(hufflepuffPoints);
    let housesPoints = [
        gryffindorPoints,
        slytherinPoints,
        ravenclawPoints,
        hufflepuffPoints,
    ];
    console.log(housesPoints);
    function indexHouse() {
        console.log(housesPoints);
        let winnerHousePoints = 0;
        let winnerHouseIndex = 0;

        for (let i = 0; i < housesPoints.length; i++) {
            if (housesPoints[i] > winnerHousePoints) {
                winnerHousePoints = housesPoints[i];
                winnerHouseIndex = i + 1;
            }
        }
        console.log(winnerHouseIndex);
        switch (winnerHouseIndex) {
            case 0:
                console.log('Comprueba que el test est?? completo');
                setTextRequired('');
                break;
            case 1:
                console.log('gryffindor');
                setGryffindorHTML('');
                setTextRequired('hidden');
                break;
            case 2:
                console.log('slytherin');
                setSlytherinHTML('');
                setTextRequired('hidden');
                break;
            case 3:
                console.log('ravenclaw');
                setRavenclawHTML('');
                setTextRequired('hidden');
                break;
            case 4:
                console.log('hufflepuf');
                setHufflepufHTML('');
                setTextRequired('hidden');
                break;
            default:
                break;
        }
    }

    const handlePrevent = (ev) => {
        ev.preventDefault();
    };

    function backPage() {
        setGryffindorHTML('hidden');
        setRavenclawHTML('hidden');
        setSlytherinHTML('hidden');
        setHufflepufHTML('hidden');
        window.location.replace('/');
    }

    return (
        <>

            <form onSubmit={handlePrevent} className='formHat'>
                <FirstQuestion handlePet={handlePet} pet={pet} />
                <SecondQuestion
                    handleclassroom={handleclassroom}
                    classroom={classroom}
                />
                <ThirdQuestion
                    handleInvention={handleInvention}
                    invention={invention}
                />
                <FourQuestion handleSpell={handleSpell} spell={spell} />
                <FiveQuestion handleTeacher={handleTeacher} teacher={teacher} />
                <SixQuestion handleSweet={handleSweet} sweet={sweet} />
                <SevenQuestion handleObject={handleObject} object={object} />
                <EightQuestion handleProtect={handleProtect} protect={protect} />
                <NineQuestion handleQualities={handleQualities} qualitie={qualitie} />
                <TenQuestion
                    handleTransport={handleTransport}
                    transport={transport}
                />{' '}
                <ButtonResponse handleButton={handleButton} />
            </form>
            <section>
                <article className={gryffindorHTML}>
                    <div className={`modalGryffindor ${gryffindorHTML}`}>
                        <div className='modalGryffindor__window'>
                            <div className='modalGryffindor__window--content'>
                                <header className='modalGryffindor__window--content__header'>
                                    <h2 className='modalGryffindor__window--content__header--title'>
                                        Gryffindor
                                    </h2>
                                    <span
                                        className='modalGryffindor__window--content__header--close'
                                        onClick={backPage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                  </span>
                                </header>
                                <div className='modalGryffindor__window--content__detail'>
                                    <img
                                        className='modalGryffindor__window--content__detail--img'
                                        src={gryffindor}
                                        alt='Autobus noct??mbulo para volver atr??s'
                                        title='Autobus noct??mbulo para volver atr??s'
                                    />
                                    <p className='modalGryffindor__window--content__detail--paragraph'>
                                        Tienes coraje y valent??a. Un buen miembro de Gryffindor
                                        tiene gran osad??a, temple y caballerosidad. Son capaces de
                                        todo por defender en lo que creen y nunca se dan por
                                        vencidos. Tambi??n son capaces de romper las reglas si es
                                        necesario y les encantan los retos, cuanto m??s dif??ciles,
                                        mejor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className={slytherinHTML}>
                    <div className={`modalSlytherin ${slytherinHTML}`}>
                        <div className='modalSlytherin__window'>
                            <div className='modalSlytherin__window--content'>
                                <header className='modalSlytherin__window--content__header'>
                                    <h2 className='modalSlytherin__window--content__header--title'>
                                        Slytherin
                                    </h2>

                                    <span
                                        className='modal__window--content__header--close'
                                        onClick={backPage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                                    </span>
                                </header>
                                <div className='modalSlytherin__window--content__detail'>
                                    <img
                                        className='modalSlytherin__window--content__detail--img'
                                        src={slytherin}
                                        alt='Autobus noct??mbulo para volver atr??s'
                                        title='Autobus noct??mbulo para volver atr??s'
                                    />
                                    <p className='modalSlytherin__window--content__detail--paragraph'>
                                        Posees determinaci??n, ambici??n, un cierto desd??n por las
                                        normas, astucia, aspiraciones de grandeza y hambre de poder.
                                        Tiendes a dudar antes de actuar, con el fin de sopesar todos
                                        los posibles resultados antes de decidir exactamente lo que
                                        se debe hacer y, una vez que lo averiguas, lo consigues,
                                        d??ndote igual los medios para lograrlo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className={ravenclawHTML}>
                    <div className={`modalRavenclaw ${ravenclawHTML}`}>
                        <div className='modalRavenclaw__window'>
                            <div className='modalRavenclaw__window--content'>
                                <header className='modalRavenclaw__window--content__header'>
                                    <h2 className='modalRavenclaw__window--content__header--title'>
                                        Ravenclaw
                                    </h2>
                                    <span
                                        className='modalRavenclaw__window--content__header--close'
                                        onClick={backPage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </header>
                                <div className='modalRavenclaw__window--content__detail'>
                                    <img
                                        className='modalRavenclaw__window--content__detail--img'
                                        src={ravenclaw}
                                        alt='Autobus noct??mbulo para volver atr??s'
                                        title='Autobus noct??mbulo para volver atr??s'
                                    />
                                    <p className='modalRavenclaw__window--content__detail--paragraph'>
                                        La casa Ravenclaw premia el aprendizaje, la sabidur??a, el
                                        ingenio, y el intelecto de sus miembros. Los Ravenclaw
                                        tambi??n se enorgullecen de ser originales en sus ideas y
                                        m??todos. No es raro encontrar a estudiantes de Ravenclaw que
                                        practiquen diferentes tipos de magia que otras casas podr??an
                                        tratar de evitar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className={hufflepuffHTML}>
                    <div className={`modalHufflepuff ${hufflepuffHTML}`}>
                        <div className='modalHufflepuff__window'>
                            <div className='modalHufflepuff__window--content'>
                                <header className='modalHufflepuff__window--content__header'>
                                    <h2 className='modalHufflepuff__window--content__header--title'>
                                        Hufflepuff
                                    </h2>

                                    <span
                                        className='modalHufflepuff__window--content__header--close'
                                        onClick={backPage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </header>
                                <div className='modalHufflepuff__window--content__detail'>
                                    <img
                                        className='modalHufflepuff__window--content__detail--img'
                                        src={hufflepuff}
                                        alt='Autobus noct??mbulo para volver atr??s'
                                        title='Autobus noct??mbulo para volver atr??s'
                                    />
                                    <p className='modalHufflepuff__window--content__detail--paragraph'>
                                        Eres justo, leal y trabajador. Los hufflepuff son buenas
                                        personas y suelen caer bien a todo el mundo. Son pacientes,
                                        tolerantes y siempre har??n todo de forma honrada, sin hacer
                                        trampas y respetando las reglas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <article className={textRequired}>
                <p>Comprueba que el test est?? completo</p>
            </article>
        </>
    );
};
export default Quiz;
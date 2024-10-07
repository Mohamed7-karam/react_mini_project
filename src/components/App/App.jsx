/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import './App.scss';
import Title from '../Title/Title';
import Display from '../Display/Display';
import discussion from '../../data/injures';
import Footer from '../Footer/Footer';

function App() {
  // Variable count qui s'incrémente pour le déroulé de l'histoire
  const [countHistory, setCountHistory] = useState(0);
  // Variable qui s'incremente a chaque touche tapé pour affiché la lettre du mot jusqu'a la longueur max du mot
  const [indexLetter, setIndexLetter] = useState(0);
  // variable pour afficher dans l'input
  const [inputSweetWord, setInputSweetWord] = useState('');
  // Texte envoyer au composant Display pour Nicole
  const [nicoleSpeech, setNicoleSpeech] = useState('');
  // Texte envoyer au composant Display pour John
  const [johnSpeech, setJohnSpeech] = useState('');
  // texte à affiché au lieu de mot saisie par l'utilisateur, j'utilise une variable pour parcourir le tableau à chaque fois
  const [textToModify, setTextToModify] = useState(
    discussion[countHistory].injure
  );

  useEffect(() => {
    // Mettre à jour textToModify à chaque changement de countHistory
    setTextToModify(discussion[countHistory].injure);
    // Réinitialiser l'indexLetter lorsque le texte est modifié
    setIndexLetter(0);
    // Réinitialiser l'inputSweetWord lorsque le texte est modifié
    setInputSweetWord('');
  }, [countHistory]);

  const handleSweetWord = (value) => {
    console.log(countHistory);
    // Si l'utilisateur écrit "<", on attend le caractère suivant
    if (value === '<') {
      setInputSweetWord(value); // Mettre à jour l'input avec "<"
      return; // Sortir de la fonction pour attendre le caractère suivant
    }

    if (inputSweetWord === '<' && value === '<3') {
      // Si l'utilisateur tape les caractères clé <3 je jeu se termine
      console.log('ok');
      setInputSweetWord(value);
      setNicoleSpeech('Je suis libérée !');
      setJohnSpeech('Merci davoir joué');
      // Verifie si l'index de la lettre ne depasse pas la longueur du mot
    } else if (indexLetter < textToModify.length) {
      // Parcours les lettres du mot
      const currentLetter = textToModify[indexLetter];
      // met la lettre remplacé dans le state
      setInputSweetWord(
        (prevInputSweetWord) => prevInputSweetWord + currentLetter
      );
      setIndexLetter(indexLetter + 1);
    }
  };

  const handleSubmit = () => {
    // Quand l'utilisateur soumet son mot, le mot inclus dans le tableau est envoyé au state pour
    // qu'il soit affiché dans le composant Display
    const newInsult = discussion[countHistory].injure;
    setNicoleSpeech(newInsult);

    const newAnswer = discussion[countHistory].answer;
    setJohnSpeech(newAnswer);

    setCountHistory(countHistory + 1);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter' && countHistory === 17) {
      console.log('fin du jeu');
      event.preventDefault();
    }
    // condition pour que l'utilisateur soit obligé d'écrire le mot en entier
    if (
      event.key === 'Enter' &&
      inputSweetWord === textToModify &&
      textToModify !== ''
    ) {
      console.log('touche entrée appuyé et mot complété');
      event.preventDefault();
      handleSubmit();
    } else if (event.key === 'Enter') {
      console.log('touche entrée appuyé');
      event.preventDefault();
    }
  };

  return (
    <div className="App">
      <Title />
      <Display nicole={nicoleSpeech} john={johnSpeech} />
      <Input
        injure={inputSweetWord}
        handleSweetWord={handleSweetWord}
        enterPress={handleEnter}
      />
      <Footer />
    </div>
  );
}

export default App;

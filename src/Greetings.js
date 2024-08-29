import './Greetings.css';

export const Greetings = (props) => {
  const Language = (lang) => {
    switch (lang) {
      case 'fi':
        return 'Hei';
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hi';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };
  return (
    <div className="greetings">
      <p>
        {Language(props.lang)}, {props.children}!
      </p>
    </div>
  );
};

export default Greetings;

const nameMapping = {
  1: 'Official Website',
  2: 'Fandom',
  3: 'Wikipedia',
  4: 'Facebook',
  5: 'X',
  6: 'Twitch',
  8: 'Instagram',
  9: 'Youtube',
  10: 'Iphone',
  11: 'Ipad',
  12: 'Android',
  13: 'Steam',
  14: 'Reddit',
  15: 'Itch',
  16: 'Epic Games',
  17: 'GOG',
  18: 'Discord',
};

const GameWebsite = (props) => {
  let image;
  try {
    image = require(`../../images/websites-icons/${props.category}.png`);
  } catch (err) {
    image = require('../../images/websites-icons/0.png');
  }
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer"
      className='flex items-center hover:text-sky-600'>
      <img src={image} alt={`${props.category} icon`}
        className="w-8 h-8  ml-4 mr-2 my-2 " />
      <span>
        {nameMapping[props.category] || "Website"}
      </span>
    </a>
  );
};

export default GameWebsite;

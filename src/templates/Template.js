import image from '../assets/image.png'

const Template = async () => {
  const view = `
    <div class="About">
      <div class="text-8xl">
        Test
      </div>
      <div class="card">
        <div class="card_social">
          <a href="https://twitter.com/gndx">
            <img src="${image}" />
          </a>
          <a href="https://github.com/gndx">
            <img src="${image}" />
          </a>
          <a href="https://instagram.com/gndx">
            <img src="${image}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;
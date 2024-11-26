import { loremIpsum } from 'lorem-ipsum';

const BuildPage = (index) => (
    <>
        <h3>Page {index}</h3>
        <div>
            Page {index} content: { loremIpsum({ count: 5})}
        </div>
    </>
);

export const ContentPanel = () => BuildPage(1);
export const ContactPanel = () => BuildPage(2);
import Button from "./Button";

const Test = ({page}) => page(
    <div>
        <Button
            text='button'
            loading={true}
            className='main-menu'
        />
        
    </div>
);
export default Test;
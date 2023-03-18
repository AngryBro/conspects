const Page404 = ({page}) => page(
    <div>
        Тут пока пусто {'\\( \\varnothing \\)'}
        <h1 onClick={page.link('index')}>На главную</h1>
    </div>
);

export default Page404;
const Page404 = ({page}) => page(
    <div>
        Тут пока пусто {'\\( \\varnothing \\)'}
        <h1 className="main-menu" onClick={page.navigate('Математика')}>На главную</h1>
    </div>
);

export default Page404;
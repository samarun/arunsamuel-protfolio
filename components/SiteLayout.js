import Header from './Header'

const SiteLayout = ({ children }) => (
    <>
        <div>
            <Header />
            {children}

        </div>
    </>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>

export default SiteLayout;
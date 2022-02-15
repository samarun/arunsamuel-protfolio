import LeftLayout from "../components/LeftLayout";
import RightLayout from "../components/RightLayout";
import Layout from "../components/Layout";
import HomeLayout from "../components/HomeLayout";
import TitleComponent from "../components/TitleComponent";

export default function resume() {
  return (
    <Layout>
      <HomeLayout>
        <TitleComponent>Resume</TitleComponent>
        <RightLayout>

        </RightLayout>
      </HomeLayout>
    </Layout>
  );
}

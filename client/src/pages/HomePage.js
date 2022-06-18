import HomePageContent from "../components/HomePageContent/HomePageContent";
import NavigationBar from "../components/NavBar/NavigationBar";

function HomePage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      {/* <NavigationBar /> */}
      <HomePageContent></HomePageContent>
    </div>
  );
}

export default HomePage;

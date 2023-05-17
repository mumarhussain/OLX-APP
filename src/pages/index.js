import ProtectedRoute from "@/components/Protected";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Herosection from "@/components/Card/Herosection";
const MainComponent = () => {
  return <>
  <Header />
      <Navbar />
      <Herosection/>

  </>
}
function Index() {
  return (
    <div>
      <ProtectedRoute MyComponent={MainComponent} />
      
    </div>
  );
}

export default Index;

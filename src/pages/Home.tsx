import Header from "../components/Header"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Services from "../components/Services"


export default function Home() {
  return (
    <div>
            <Header />
			<Services />
			<Blog />
			<Contact />
			<Footer />
    </div>
  )
}
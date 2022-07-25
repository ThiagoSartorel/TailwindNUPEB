import axios from 'axios'
import AuthorCard from '../components/AuthorCard';
import HtmlParser from 'react-html-parser';
import { useState, useEffect } from 'react';

export default function AuthorProfile(props) {
    const [github, setGithub] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [telephone, setTelephone] = useState("");
    const [website, setWebsite] = useState("");
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");


    useEffect(() => {


        props.author.contactType.map((contact) => {
            if (contact.contact_type_id === 1) {
                setEmail(contact.value);
            }
            if (contact.contact_type_id === 2) {
                setTelephone(contact.value);
            }
            if (contact.contact_type_id === 3) {
                setWhatsapp(contact.value);
            }
            if (contact.contact_type_id === 4) {
                setFacebook(contact.value);
            }
            if (contact.contact_type_id === 5) {
                setInstagram(contact.value);
            }
            if (contact.contact_type_id === 6) {
                setTwitter(contact.value);
            }
            if (contact.contact_type_id === 7) {
                setLinkedin(contact.value);
            }
            if (contact.contact_type_id === 8) {
                setYoutube(contact.value);
            }
            if (contact.contact_type_id === 9) {
                setGithub(contact.value);
            }
            if (contact.contact_type_id === 10) {
                setWebsite(contact.value);
            }
        }
        );
    }, []);




    return (
        <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-48 min-h-screen pt-12 mb-16">
            <div className="textoBasico">
                <h2 className="titulo-principal">Perfil do Autor</h2>
            </div>
            <AuthorCard name={props.author.name} image={props.author.photo_id} bio={HtmlParser(props.author.bio)} github={github} facebook={facebook} email={email} youtube={youtube} twitter={twitter} linkedin={linkedin} instagram={instagram} website={website} whatsapp={whatsapp} telephone={telephone}/>
        </div>
    );
}

// This gets called on every request
export async function getStaticProps(context) {
    // Fetch data from external API
    const res = await axios.get(process.env.BACKEND + "author/" + context.params.AUTHORS);
    //console.log(res.data.contactcontact_type_id)
    // Pass data to the page via props
    return { props: { author: res.data } }
}

export async function getStaticPaths(context) {
    // Call an external API endpoint to get posts
    const res = await fetch(process.env.BACKEND + "authors/all")
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((authors) => ({
        params: { AUTHORS: (authors.id.toString()) },
    }));
    //console.log(paths)
    return { paths, fallback: true }
}

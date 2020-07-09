import Layout from '../components/layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <br />
        <br />
        <br />
        <br />
        <p style={{ width: "80vw" }}>Eiusmod mollit amet cupidatat incididunt non proident eiusmod culpa exercitation est sit aliquip non do. Dolore labore quis sit consectetur Lorem nostrud. Pariatur magna pariatur sit aute elit dolore voluptate nisi ad. Dolor nostrud nostrud ipsum id velit. Reprehenderit tempor ullamco amet ex. Exercitation et minim aliquip eu cupidatat pariatur exercitation excepteur et occaecat esse consectetur. Ut elit duis dolore voluptate consequat aliquip ex cillum eiusmod sit voluptate.

Do quis et do ut ex. Commodo laboris officia aliquip amet elit irure amet reprehenderit reprehenderit. Irure Lorem sunt veniam non tempor ea excepteur elit dolore ut incididunt nisi. Culpa laboris culpa laborum pariatur laboris magna cillum in adipisicing laborum non aute. Qui reprehenderit incididunt anim proident deserunt laborum pariatur consectetur dolor officia voluptate. Duis veniam voluptate elit eiusmod.

Exercitation elit ea Lorem aute Lorem veniam proident commodo sint ipsum aliquip cupidatat duis. Eiusmod consequat velit ad culpa mollit officia tempor cupidatat reprehenderit aliquip. Aliqua aliqua excepteur cillum anim sit laborum aute id nostrud ex non occaecat exercitation aliquip. Lorem in cupidatat adipisicing labore commodo. Culpa nulla laboris amet adipisicing elit amet non amet nulla mollit in anim. Amet labore deserunt magna veniam excepteur minim qui et ullamco nostrud nisi mollit. Quis est dolor cupidatat deserunt enim incididunt dolor.

Ut dolor laborum nulla aute eu mollit mollit. Esse nisi ex velit culpa. Consectetur deserunt sit enim non cupidatat laboris voluptate duis ad laboris. Lorem ut sunt dolore occaecat amet.</p>
    </Layout>
);

export default withRouter(Post);
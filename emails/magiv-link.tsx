import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface MagicLinkEmailProps {
  magicLink?: string;
}

export const MagicLinkEmail = (
  { magicLink }: MagicLinkEmailProps,
  user: string
) => (
  <Html>
    <Head />
    <Body className="bg-white font-sans">
      <Preview>Connectez-vous avec ce lien magique</Preview>
      <Container className="mx-auto p-6 bg-bottom bg-no-repeat rounded-xl shadow-md">
        <Heading className="text-2xl font-bold mt-12 text-gray-900 text-center">
          tontanTranokala
        </Heading>

        <Section className="my-6">
          <Text className="text-base leading-6 ">Bonjour {user},</Text>

          <Text className="text-base leading-6 ">
            Nous sommes ravis de vous compter parmi les utilisateurs de{" "}
            <strong>tontanTranokala</strong> 🚀
            <br />
            Notre solution vous permet d’enregistrer, organiser et gérer
            facilement vos sites et plateformes en un seul endroit, pour gagner
            du temps et garder une vue claire sur vos projets.
          </Text>

          <Text className="text-base font-medium mt-4 text-gray-800">
            👉 Avec tontanTranokala, vous pouvez :
          </Text>
          <ul className="list-disc pl-5 text-sm ">
            <li>Créer des groupes pour classer vos sites et plateformes</li>
            <li>Ajouter rapidement de nouveaux sites</li>
            <li>Naviguer facilement grâce à vos résumés de groupes</li>
            <li>Gérer vos informations en toute sécurité</li>
          </ul>

          <Text className="text-base mt-4 ">
            Pour commencer, connectez-vous à votre espace personnel dès
            maintenant :
          </Text>

          <Text className="mt-4 text-center">
            <Link
              className="inline-block px-6 py-3 text-white bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition"
              href={magicLink}
            >
              👉 Accéder à mon espace 👈
            </Link>
          </Text>

          <Text className="text-base mt-4 ">
            Si vous avez déjà un compte, il vous suffit de vous reconnecter pour
            continuer à gérer vos sites.
          </Text>

          <Text className="text-base mt-4 ">
            Merci de votre confiance, et bienvenue dans la communauté
            <strong> tontanTranokala</strong> 🙌
          </Text>
        </Section>

        <Text className="text-base  mt-6">
          À très vite,
          <br />
          <span className="font-semibold">L’équipe tontanTranokala</span>
        </Text>
      </Container>
    </Body>
  </Html>
);

MagicLinkEmail.PreviewProps = {
  magicLink: "http://localhost:3000",
} as MagicLinkEmailProps;

export default MagicLinkEmail;

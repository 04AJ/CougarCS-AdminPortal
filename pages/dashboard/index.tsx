import type { GetServerSidePropsContext } from "next";
import Layout from "../../components/layout";
import {
  createServerSupabaseClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Title } from "../../components/title";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

const Dashboard = ({ user }: { user: User; }) => {
  const router = useRouter();

  return (
    <Layout title="Dashboard">

      <Title
        title="Dashboard"
        subtitle="The Great Dashboard">
        Welcome, <a className="text-red-600">{user.email}</a>
      </Title>

      <button onClick={() => router.push("/dashboard/members")}
        className="my-4 flex justify-center w-1/5 text-white font-semibold text-sm h-9 rounded-sm bg-red-600 hover:bg-red-700 space-x-2">
        <AiOutlineUnorderedList className="my-auto" />
        <span className="my-auto">
          Members
        </span>
      </button>
    </Layout>
  );
};

export default Dashboard;

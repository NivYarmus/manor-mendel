import { NextPage } from 'next';

import CustomHeader from '../components/CustomHeader';

const Index: NextPage = () => {
	return (
		<>
			<CustomHeader />

			<main className="min-h-screen flex justify-center items-center" dir="rtl">
				<section className="bg-white shadow-xl flex flex-col w-96 relative justify-end rounded-xl overflow-hidden group m-3">
					<img src="/manor.jpg" className="transition-all duration-1000 group-hover:blur-md" />
					<div className="absolute p-10 flex flex-col flex-1 bg-gradient-to-b from-transparent to-white w-full transition-all duration-700 group-hover:scale-125 origin-bottom-right">
						<h1 className="text-5xl font-bold mt-20">מנור</h1>
						<p className="">מנור מנדל. אלילינו האחד והיחיד</p>
					</div>
				</section>
        <section className="bg-white shadow-xl flex flex-col w-96 relative justify-end rounded-xl overflow-hidden m-3">
          <img src="/manor-approval.jpg"/>
          <div className="absolute p-10 flex flex-col flex-1 bg-gradient-to-b from-transparent to-white w-full">
						<h5 className="text-5xl font-bold mt-20">מנור מאשר</h5>
					</div>
        </section>
			</main>
		</>
	);
};

export default Index;

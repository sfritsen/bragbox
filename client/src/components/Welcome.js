import React from "react";
import { SiTask } from "react-icons/si";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const Welcome = () => {
	const { googleSignIn } = UserAuth();

	return (
		<>
			<div className="welcome-bg-image" alt="thinking">
				<Navbar />
				<div className="sm:flex sm:justtify-content-center mb-3 mx-3 md:mx-4 lg:mx-28 text-neutral-700">
					<div className="sm:w-1/2 sm:mr-12 mt-20">
						<h1 className="mb-4 pl-3 text-center sm:text-left font-bold tracking-tighter text-3xl lg:text-4xl text-slate-600">What is a bragdoc?</h1>
						<ul className="bg-white bg-opacity-50 drop-shadow-xl p-6 rounded-lg border-[1px] border-neutral-300">
							<li className="py-2">
								<strong>List of accomplishments</strong> - Start by making a comprehensive list of your accomplishments, big and small, throughout your career. These can include awards, promotions, successful projects, positive feedback from clients
								or colleagues, and anything else that you're proud of.
							</li>
							<li className="py-2">
								<strong>Metrics and data</strong> - Where possible, include metrics or data that demonstrate the impact of your accomplishments. For example, if you increased sales by a certain percentage, or reduced expenses by a certain amount,
								make sure to include those numbers.
							</li>
							<li className="py-2">
								<strong>Specific examples</strong> - Along with the metrics, include specific examples of your work. Describe the challenges you faced, the actions you took, and the results you achieved.
							</li>
							<li className="py-2">
								<strong>Skills and strengths</strong> - Highlight your skills and strengths, and provide examples of how you've used them to benefit your employer or clients. This can include soft skills like communication and teamwork, as well as
								technical skills specific to your industry or job function.
							</li>
							<li className="py-2">
								<strong>Professional development</strong> - Include any training, certifications, or other professional development activities you've completed. This shows that you're committed to growing and improving in your career.
							</li>
							<li className="py-2">
								<strong>Testimonials</strong> - If you have positive feedback or testimonials from colleagues, clients, or supervisors, include them in your bragdoc. This adds credibility and reinforces your achievements.
							</li>
						</ul>
					</div>
					<div className="sm:w-1/2 sm:ml-10 sm:mt-20">
						<blockquote className="my-5 bg-white bg-opacity-60 drop-shadow-xl p-6 rounded-lg border-[1px] border-neutral-300">
							<q className="font-semibold text-xl">
								Your achievements may speak for themselves, but without a bragdoc, they risk being whispered instead of shouted from the rooftops. A well-crafted bragdoc ensures that your hard work and successes are not just remembered, but
								celebrated and shared to propel your career forward.
							</q>
							<figcaption className="ml-4">
								<cite>&mdash; ChatGPT</cite>
							</figcaption>
						</blockquote>

						<div className="flex flex-col items-center justify-center">
							<div className="w-fit p-6 bg-white border-4 border-teal-400 rounded-full text-center">
								<SiTask className="text-8xl text-teal-500" />
							</div>
							<div className="mt-2 text-center py-5">
								<Link onClick={googleSignIn} className="p-2 lg:p-4 rounded-full border-4 text-md bg-teal-500 border-teal-500 hover:bg-white hover:border-teal-400 text-white hover:text-teal-500 text-xl font-bold">
									Start your Bragbox today!
								</Link>
							</div>
						</div>

						{/* <div className="text-center sm:text-right py-5 sm:pt-10 sm:mb-0 sm:pr-8 border-3 border-white">
							<Link onClick={googleSignIn} className="p-4 rounded-full border-4 border-white text-md bg-teal-500 hover:bg-white hover:border-teal-500 hover:text-teal-500 text-white text-xl font-bold">
								Start your Bragbox today!
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Welcome;

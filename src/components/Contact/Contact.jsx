import ContComp from "./ContComp";

const Contact = () => {
	return (
		<div className="container w-full">
			<div className="w-full mb-3">
				<h1 className="text-3xl">Contact Us</h1>
			</div>

			<div className="contact w-full flex justify-between items-center">
				<div className="left contact-info mx-8 p-5 w-[25%]">
					<div className="w-full text-start mb-3 w-full">
						<h3 className="text-zinc-700 text-lg font-bold">Contact Information</h3>
						<span className="text-zinc-400 text-xs">
							Say something to start a live chat!
						</span>
					</div>

					<div className="contacts text-sm">
						<ContComp icon={7} content={"+91 236-286-9222, +91 236-286-9111"} />
						<ContComp icon={7} content={"medico@med.com"} />
						<ContComp
							icon={7}
							content={
								"Mirza Ismail Road, Near Ajmeri Gate, Jaipur, Rajasthan 302001, India"
							}
						/>
					</div>
				</div>

				<div class="right contact-form w-full r-con mb-md-2 mb-4 mx-md-2 mx-3 col-lg-5 col-md-7 col-12 order-md-2 order-sm-1 mt-lg-3 ">
					<div class="form-container">
						<div class="form-container-border">
							<form id="myForm" class="myForm" action="#">
								<div class="contact-group">
									<div className="flex w-full items-center justify-between mb-10">
										<div class="contact-box mb-3 w-[45%] mx-1">
											<input
												type="text"
												name="fname"
												class="contact-input"
												id="fname"
												required
												placeholder="First name"
											/>
											<label for="fname" class="contact-label">
												First Name
											</label>
										</div>

										<div class="contact-box mb-3 w-[45%] mx-1">
											<input
												type="text"
												name="lname"
												class="contact-input"
												id="lname"
												required
												placeholder="Last name"
											/>
											<label for="lname" class="contact-label">
												Last Name
											</label>
										</div>
									</div>

									<div className="flex w-full items-center justify-between mb-10">
										<div class="contact-box mb-3 w-[45%] mx-1">
											<input
												type="email"
												name="user_email"
												class="contact-input"
												id="email"
												required
												placeholder="E-mail"
											/>
											<label for="email" class="contact-label">
												Email
											</label>
										</div>

										<div class="contact-box mb-3 w-[45%] mx-1">
											<input
												type="tel"
												name="user_contact"
												class="contact-input"
												id="phone"
												required
												placeholder="Phone Number"
											/>
											<label for="email" class="contact-label">
												Phone Number
											</label>
										</div>
									</div>

									<div class="contact-box contact-area w-full">
										<textarea
											name="user_message"
											id="message"
											class="contact-input"
											required
											placeholder="Type your message here"
										></textarea>
										<label for="message" class="contact-label">
											Message
										</label>
									</div>

									<div class="contact-box button-box mb-4 flex items-center justify-center">
										<button
											type="submit"
											class="contact-button button semi-bold"
											value="send"
										>
											<i class="ri-send-plane-fill"></i>
											Send
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

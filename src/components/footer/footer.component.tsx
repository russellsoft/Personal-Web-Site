import { AddressContainer, ContactMe, ContactMeElement, FooterContainer, FooterText, GithubSVG, MapContainer, SVG } from "./footer.styles"
import GitHubSVG from "../../assets/icons8-github.svg"
import TelegramSVG from "../../assets/icons8-telegram-app.svg"
import VkSVG from "../../assets/icons8-vk-в-круге.svg"
import WhatsAppSVG from "../../assets/icons8-whatsapp.svg"
import { Linking } from "./footer.styles"

const Footer = () => {
	return (
		<FooterContainer>
			<AddressContainer>
				Email: makievrus@gmail.com<br />
				Телефон: +79884574834
				<MapContainer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.317637811805!2d37.60688691625828!3d55.71823188054417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b6ccf96c887%3A0xc45879b757bf6115!2z0JzQtdGC0YDQviAi0KjQsNCx0L7Qu9C-0LLRgdC60LDRjyI!5e0!3m2!1sru!2sru!4v1677168624346!5m2!1sru!2sru" loading="lazy"></MapContainer>
			</AddressContainer>
			<ContactMe>
				<FooterText>Мои Контакты</FooterText>

				<ContactMeElement>
					<Linking to="https://github.com/russellsoft">
						<GithubSVG src={GitHubSVG} />
					</Linking>
					<Linking to="https://github.com/russellsoft">
						Github
					</Linking>
				</ContactMeElement>

				<ContactMeElement>
					<Linking to="https://t.me/ruslan_7887">
						<SVG src={TelegramSVG} />
					</Linking>
					<Linking to="https://t.me/ruslan_7887">
						Telegram
					</Linking>
				</ContactMeElement>

				<ContactMeElement>
					<Linking to="https://vk.com/id581307087">
						<SVG src={VkSVG} />
					</Linking>
					<Linking to="https://vk.com/id581307087">
						Vkontakte
					</Linking>
				</ContactMeElement>

				<ContactMeElement>
					<Linking to="https://wa.me/+79884574834">
						<SVG src={WhatsAppSVG} />
					</Linking>
					<Linking to="https://wa.me/+79884574834">
						WhatsApp
					</Linking>
				</ContactMeElement>

			</ContactMe>
		</FooterContainer>
	)
}

export default Footer
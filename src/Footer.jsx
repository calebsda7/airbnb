import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
	const year = new Date().getFullYear;

	return (
		<footer>
			<div className="defaultFooter">
				<div className="copyright">
					<p>© {year} XXXX</p>
				</div>
				<div className="footerIcon">
					<FacebookIcon />
				</div>
				<div className="footerIcon">
					<InstagramIcon />
				</div>
				<div className="footerIcon">
					<TwitterIcon />
				</div>
			</div>
		</footer>
	);
}

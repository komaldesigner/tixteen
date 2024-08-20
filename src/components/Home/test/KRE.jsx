import { useRef } from "react"
import "./packaging2.css"
import { motion, useTransform, useScroll } from "framer-motion"

// import { assets, packagingImages } from "../../assets/asset"
import WrapBurger from '../../../assets/img/home/Wrap-Burger.png';
import YESByDCM from '../../../assets/img/home/YES-By-DCM.png';
import RideAndPlay from '../../../assets/img/home/Ride and Play.png';
import Sapphire from '../../../assets/img/home/sapphire  logo.png';
import Bonn from '../../../assets/img/home/Bonn.png';
import Chenab from '../../../assets/img/home/Chenab.png';
import Derby from '../../../assets/img/home/Derby.png';
import Evil from '../../../assets/img/home/Evil.png';
import Gates from '../../../assets/img/home/Gates-Logo.png';
import Maalana from '../../../assets/img/home/Maalana-logo 2.png';
import BrainAsium from '../../../assets/img/home/Brain-Asium.png';
import BakersTree from '../../../assets/img/home/Bakers-Tree.png';
import Americana from '../../../assets/img/home/Americana.png';
import AllNice from '../../../assets/img/home/All-Nice.png';
import UtamSugar from '../../../assets/img/home/Utam-Sugar.png';
import NativeOrigins from '../../../assets/img/home/Native-origins.png';
import NanuOrganic from '../../../assets/img/home/nanu-Organic.png';
import Kashish from '../../../assets/img/home/Kashish.png';
import HugeA from '../../../assets/img/home/Huge-a.png';
import GoodEarth from '../../../assets/img/home/Good-Earth.png';
import "./packaging2.css";
import { spring } from "framer-motion";



const packagingImages =[
  {img: WrapBurger, alt: "WrapBurger"},
  {img: YESByDCM, alt: "YESByDCM"},
  {img: RideAndPlay, alt: "RideAndPlay"},
  {img: Sapphire, alt: "Sapphire"},
  {img: Bonn, alt: "Bonn"},
  {img: Chenab, alt: "Chenab"},
  {img: Derby, alt: "Derby"},
  {img: Evil, alt: "Evil"},
  {img: Gates, alt: "Gates"},
  {img: Maalana, alt: "Maalana"},
  {img: BrainAsium, alt: "BrainAsium"},
  {img: BakersTree, alt: "BakersTree"},
  {img: Americana, alt: "Americana"},
  {img: AllNice, alt: "AllNice"},
  {img: UtamSugar, alt: "UtamSugar"},
  {img: NativeOrigins, alt: "NativeOrigins"},
  {img: NanuOrganic, alt: "NanuOrganic"},
  {img: Kashish, alt: "Kashish"},
  {img: HugeA, alt: "HugeA"},
  {img: GoodEarth, alt: "GoodEarth"},
  {img: WrapBurger, alt: "WrapBurger"},
  {img: YESByDCM, alt: "YESByDCM"},
  {img: RideAndPlay, alt: "RideAndPlay"},
  {img: Sapphire, alt: "Sapphire"},
  {img: Bonn, alt: "Bonn"},
  {img: Chenab, alt: "Chenab"},
  {img: Derby, alt: "Derby"},
  {img: Evil, alt: "Evil"},
  {img: Gates, alt: "Gates"},
  {img: Maalana, alt: "Maalana"},
  {img: BrainAsium, alt: "BrainAsium"},
  {img: BakersTree, alt: "BakersTree"},
  {img: Americana, alt: "Americana"},
  {img: AllNice, alt: "AllNice"},
  {img: UtamSugar, alt: "UtamSugar"},
  {img: NativeOrigins, alt: "NativeOrigins"},
  {img: NanuOrganic, alt: "NanuOrganic"},
  {img: Kashish, alt: "Kashish"},
  {img: HugeA, alt: "HugeA"},
  {img: GoodEarth, alt: "GoodEarth"},
]

const Packaging2 = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const x = useTransform(scrollYProgress, [0.7, 1], ["200%", "-525%"])
	const xx = useTransform(scrollYProgress, [0, 1], ["300%", "300%"])
	const xxx = useTransform(scrollYProgress, [0.8, 1], ["5%", "-75%"])
	const transition = {
		type: "spring",
		stiffness: 50, // Adjust the stiffness to make the animation smoother
		damping: 20, // Adjust the damping to control the overshooting
		duration: 2, // You can set a duration if needed
	}
	return (
		<div className="packaging2">
			
			<div
				className="packaging2-container"
				ref={targetRef}
			>
				
				
				<div className="package2-subContainer1">
					<motion.div
						initial={{ x: -150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 1,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						className="package2-subContainer1-content1"
					>
					
					</motion.div>
					{/* <img
						src={assets.packag_img1}
						alt=""
					/> */}
					<motion.video
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0.3, opacity: 0 }}
						transition={{ duration: 0.6 }}
						id="myVideo4"
						autoPlay
						muted
						loop
						// controls
					>
					</motion.video>
					<motion.div
						initial={{ x: 150, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 1,
							x: { type: "spring", stiffness: 60 },
							opacity: { duration: 1 },
							ease: "easeIn",
							duration: 1,
						}}
						className="package2-subContainer1-content2"
					>
						
					</motion.div>
				</div>
				<div className="package2-subContainer2">
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.6 }}
						className="package2-subContainer2-left"
					>
						
					</motion.div>
					<motion.video
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0.3, opacity: 0 }}
						transition={{ duration: 0.4 }}
						id="myVideo5"
						// width="200"
						autoPlay
						muted
						loop
						// controls
					>
						<source
							// src={assets.packaging_v4}
							type="video/mp4"
						/>
					</motion.video>
				</div>
				<div className="package2-subContainer3">
					<motion.img
						// whileInView={{ y: 0, x: 0, opacity: 1 }}
						// initial={{ y: 100, x: -150, opacity: 0 }}
						// transition={{
						// 	delay: 1,
						// 	x: { type: "spring", stiffness: 60 },
						// 	opacity: { duration: 1 },
						// 	ease: "easeIn",
						// 	duration: 1,
						// }}
						// whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
						// initial={{ scale: 0.5, opacity: 0, x: 150, y: -100 }}
						// transition={{ duration: 0.6 }}
						// src={assets.packag_img2}
						alt=""
					/>
					<motion.div
						whileInView={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						
					</motion.div>
					<motion.img
						// whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
						// initial={{ scale: 0.5, opacity: 0, x: -150, y: 100 }}
						// transition={{ duration: 0.6 }}
						// src={assets.packag_img3}
						alt=""
					/>
				</div>
				<div className="package2-subContainer4">
					<motion.div
						className="image-container"
						style={{ x }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
					<motion.div
						className="image-container image-container2"
						style={{ x: xx }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
					<motion.div
						className="image-container"
						style={{ x: xxx }}
					>
						{packagingImages.map((items, index) => (
							<div className="package-imageContainer">
								<img
									key={index}
									src={items.img}
									alt=""
								/>
							</div>
						))}
					</motion.div>
				</div>
				{/* <div style={{height:"100vh"}} >
					.
				</div> */}
			</div>
		</div>
	)
}

export default Packaging2

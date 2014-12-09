var automationSolutions = angular.module('automationSolutions', []);

automationSolutions.controller('SolutionsListCont', function ($scope) {
	$scope.solutions = [
		{
			'name': 'robotic systems',
			'image': 'http://automation.lincolnelectric.com/_img/updated/robotic-systems.jpg',
			'content': 'Our robotic automation solutions give you the ability to fully automate the welding process. Lincoln Electric offers an array of pre-engineered and custom robotic systems. We specialize in integrating robotic systems to help you decrease manufacturing costs, increase weld quality, improve welding productivity and enhance your working environment. Robotic welding is a way to keep labor costs down, with the added benefit of freeing your most valuable asset – the employees – to apply themselves in more efficient and productive ways. Let automation technology address the routine, repetitive, physically challenging tasks in your plant, and use the highly skilled workers in more efficient and productive ways.'
		},
		{
			'name': 'mechanized systems',
			'image': 'http://automation.lincolnelectric.com/_img/updated/mechanized-automation.png',
			'content': 'Our mechanized automation systems encompass fixed automation and programmable automation products. Mechanized automation does not include a robot and is ideal for products that are heavy and large. Diameters as large as 30 feet can be welded with our products. If you work with wind towers, pressure vessels, trailers, cladding, heavy machinery and structural steel, a mechanized automation solution could be for you. We offer a wide range of products, including seam and bore welders, column and boom systems, cross slides, seam tracking (laser and tactile), positioners, side beams, lathes, headstock/tailstock positioners, turntables, flux recovery systems and turning rolls.'
		},
		{
			'name': 'ORBITAL SYSTEMS',
			'image': 'http://automation.lincolnelectric.com/_img/updated/orbital-systems.png',
			'video': 'https://youtube.com/',
			'content': 'Orbital welding systems, intended for tube and pipe joining, incorporate all necessary components including clamp-one weld heads, operator pendants, controllers, welding power sources, water coolers and track rings if necessary. Together, these components deliver the precise arc control and monitoring capability required by code-regulated power generation applications in power plants, chemical plants or refineries.'

		},
		{
			'name': 'tube bending and fabricating systems',
			'image': 'http://automation.lincolnelectric.com/_img/updated/tube-bending.jpg',
			'content': [
				'Tubular fabricated components have become the ideal engineered solution for an ever increasing number of applications and markets –ranging from automotive and appliance, to HVAC, refrigeration, steel furniture and more. With this growth comes an inevitable demand for higher component part quality and productivity, including quick job change-over capability to meet production environment ‘just in time’demands.',
				'Lincoln Electric has developed a range of flexible, reliable and cost effective tube bending and fabricating solutions that can deliver maximum return on investment.'
			],
		},
		{
			'name': 'laser systems',
			'content': 'Laser welding can help you make narrow and deep welds at high welding speeds and is often used in welding for high volume applications or in applications where low heat is important. In some cases, you may be able to make a weld that was not possible because of limitations with metal inert gas (MIG) process and tungsten inert gas (TIG) process. If you need high speed and a controlled heat input for meticulous detail, then a laser welding solution is for you.',
		},
		{
			'name': 'CUTTING SYSTEMS',
			'images': [
				'http://automation.lincolnelectric.com/_img/plasma-cutting.png',
				'http://automation.lincolnelectric.com/_img/cutting-systems.png'
			],
			'content': [
				'Lincoln Electric offers one of the broadest cutting product portfolios in the metalworking industry. This portfolio includes plasma cutters ranging from 25 to 400 amps, Harris® oxyfuel cutting systems, Torchmate® CNC plasma cutting tables including torch height control systems, Vernon Tool® tube and pipe profilers and tube cutting machines, as well as the PythonX® all-in-one structural steel fabricating system capable of replacing drilling, punching, sawing and hand torching operations.For exceptional cut edge quality and consistency, our Burny Kaliburn® plasma power sources feature FineLine™ high definition plasma cutting technology which produces square and virtually dross free cuts. When bolt quality holes are needed, FineLine is paired with our UltraSharp™ hole technology to provide industry leading 1 to 1 hole quality that requires virtually no secondary processing.',
				'Torchmate’s broad portfolio of CNC cutting tables range from the smaller Growth Series™ product line, with a work space as small as 2‘x 2’, to the larger X™ series which expands up to 10’x 40” , or larger. These CNC cutting tables can accommodate a wide range of cutting processes including plasma, oxyfuel, water jet, and if needed – a combination of these processes on a single system.Vernon Tool offers a range of industrial pipe cutting and beveling machines with options that include oxyfuel, abrasive and plasma cutting equipment, robotic cutting solutions, automated loading and conveyor systems, CNC controlled and Windows-based cutting software, and pipe profiling machinery able to accommodate pipe diameters up to 84” and round and square tubing.For applications involving structural steel, the PythonX 3D plasma structural fabrication system combines CNC robotics, high-definition plasma cutting and cut software. The PythonX is capable of processing beams, channels, angles, square/rectangular tubing and plate all on one machine resulting in lower fabrication costs, increased productivity and reduced errors.As a global supplier of 2D and 3D cutting systems, we can provide solutions for a wide range of segments including general fabrication, structural, offshore, pressure vessel, shipbuilding and education – just to name a few.'
			],
		},
		{
			'name': 'STRUCTURAL FRAME AUTOMATION SYSTEMS',
			'image': 'http://automation.lincolnelectric.com/_img/hydroform-technology.png',
			'content': 'Hydroforming is a cost-effective way to shape metal into strong and lightweight components. This specialized die forming uses high pressure hydraulic fluid to press working material into the die. The use of tubular hydroformed components in automotive applications worldwide is increasing with each new model launch. Frames, structural members and suspension components made using the hydroform process provide greater rigidity and strength compared to their traditionally welded counterparts. Component shapes can be optimized for form or function. Reinforcing components or additional bracket elements can often be eliminated, allowing for simplified assembly, better fit up and higher quality in the finished vehicle.Hydroform technology provides automotive engineers with exceptional flexibility when considering designs and performance requirements for future vehicles. However, this flexibility is only viable when the manufacturing process that supports it can be performed effectively and economically. Automation solutions from Lincoln Electric are helping today’s manufacturers attain their performance goals.'
		},
		{
			'name': 'PRESS AUTOMATION SYSTEMS',
			'image': 'http://automation.lincolnelectric.com/_img/press-automation.png',
			'content': 'Our servo transfers and press automation systems can enhance operational flexibility and performance. Adding automated die transfer or other press automation capability to a new or existing press is an attractive and viable option that can significantly reduce the total capital outlay compared to other alternatives. Today’s servo-based transfer automation for transfer dies is modular and programmable and can be added to virtually any press while maintaining the ability to run coil fed dies when required. The resulting ‘multi-purpose’system gives the press shop a new dimension of flexibility and becomes a valuable tool that can aid profitability and growth.'
		},
		{
			'name': 'TOOLING AND FIXTURING SOLUTIONS',
			'image': 'http://automation.lincolnelectric.com/_img/updated/tooling.png',
			'content': 'TOOLING Reliable, high-quality tooling is the key to success in a welding system. All of our tooling includes protective weld covers for all sensor cables, shielding from weld spatter and copper pneumatic air lines. We manufacture the highest quality specialized clamping devices in the industry, including toggle clamps, tube clamps, wire clamps and retract devices. These clamps are designed for reliability and durability, even when meeting the demands of harsh welding environments. Cylinders are designed in “closed” positions wherever possible to prevent damage to guide rods and seals. Specialized materials and coatings are often used on part locator blocks to prevent spatter buildup from causing quality problems.FIXTURING While robotic welding can vastly improve productivity over semiautomatic welding, the level of efficiency of automation depends upon the thoughtful design of the fixturing for maximum productivity. Robotic welding is economical when properly applied, but it can be terribly inefficient and cost-prohibitive when simple fixture design considerations are overlooked. Many productivity gains are realized, or lost, at the design stage and while parts fixturing performs a role that is simple, good fixture design is critical to the success of a robotic welding system.'
		},
		{
			'name': 'ROBOTIC INTEGRATION',
			'image': 'http://automation.lincolnelectric.com/_img/updated/robotic-integration.jpg',
			'content': 'Lincoln Electric is a supplier of advanced robotic systems that can be fully automated for virtually any welding process or application –ranging from MIG, TIG or spot welding –to vision-based systems for material handling, machine tending, palletizing, dispensing and more. Whether your plan is to use new or re-deployed robots, or any combination, Lincoln Electric can integrate the design and bring your project to a safe, efficient and affordable conclusion.'
		}
	];
});

automationSolutions.controller('SolutionsContact', function ($scope) {
	$scope.contacts = [
		{
			'contactTitle': 'Contact Us',
			'contactNumber': '1.888.935.3878',
			'contactEmail': 'automation@lincolnelectric.com'
		}
	];
});


function TestCtrl($scope) {
	$scope.title = 'write a title here...';
};

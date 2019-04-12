<template>
  <Layout>
		<div class="lg:flex flex-row-reverse leading-normal text-black font-thin">
			<div class="lg:w-1/3 max-w-sm mx-auto mb-4 lg:mx-4">
				<h3 class="font-normal">Current Role</h3>
				Senior Front End Developer @
				<a
					href="://visualsoft.co.uk"
					class="text-primary-dark no-underline hover:text-primary-light"
					rel="noreferrer"
					target="_blank"
				>
					Visualsoft Ltd
				</a>

				<h3 class="font-normal mt-4">Email</h3>
				<a
					href="mailto:alan@functionfirst.co.uk"
					class="text-primary-dark no-underline hover:text-primary-light"
				>
					alan@functionfirst.co.uk
				</a>

				<h3 class="font-normal mt-4">Technical Skills</h3>

				<p class="text-xs">
					Skill assessments undertaken with
					<a
						href="https://app.pluralsight.com/profile/alan-jenkins2"
						class="text-primary-dark no-underline hover:underline hover:text-primary-light"
						rel="noreferrer"
						target="_blank"
					>Pluralsights Skill IQ</a>.
				</p>

				<Skill name="CSS" level="Expert" :value="250" />

				<Skill name="Vue.js" level="Expert" :value="244" />

				<Skill name="NPM" level="Expert" :value="204" />

				<Skill name="AngularJS" level="Proficient" :value="180" />

				<Skill name="Javascript" level="Proficient" :value="180" />
				
				<Skill name="HTML5" level="Proficient" :value="175" />
				
				<Skill name="ES6" level="Proficient" :value="173" />
				
				<Skill name="jQuery" level="Proficient" :value="168" />
				
				<Skill name="Node.js" level="Proficient" :value="144" />

				<div>
					<h3 class="font-thin my-4 text-2xl">Other Experience</h3>

					<ul>
						<li>ASP.NET (VB, C#, MVC)</li>
						<li>Axure - Prototyping</li>
						<li>GIT</li>
						<li>MongoDb / MongooseJS</li>
						<li>Scrum / Agile</li>
						<li>Sketch (for Mac)</li>
						<li>SQL Server</li>
						<li>Photoshop</li>
					</ul>
				</div>
			</div>
			<div class="flex-1 md:mx-4">
				<p class="text-2xl">
					A hard-working and motivated designer, developer and manager with over 15 years of experience in all
					aspects of a project. Comfortable working as an individual, team member or manager. 
				</p>

				<p class="my-4">
					Most recently I worked as an Associate Software Engineer on the Sage 200 desktop application for Sage Group Plc in
					Newcastle upon Tyne.
				</p>

				<p class="my-4">
					Prior to that I was the Product Manager for the folks at Claromentis, an intranet product company based in Brighton.
					Whilst at Claromentis I developed my skills as a UI Designer, mentor and manager prior to my relocation back to the
					North East in February 2017.
				</p>

				<p class="my-4">
					I am passionate about building great web applications and products, my goal is to always strive for simple processes
					and efficiency wherever possible. 
				</p>

				<p class="my-8 flex justify-center">
					<a
						href="https://docs.google.com/document/d/1xtrGsfAjW8s9hdqVEkJMyMfiJOYWCiiVVHyKB5Oxtes/edit?usp=sharing"
						class="flex items-center rounded shadow-md py-4 px-6 bg-primary hover:bg-primary-dark no-underline text-grey-lighter"
						rel="noreferrer"
						target="_blank"
					>
						<GoogleDrive height="32" width="32" class="mr-4" />

						<div>
							View Curriculum Vitae
							<div class="text-xs">Google Doc</div>
						</div>
					</a>
				</p>

				<div class="flex justify-between">
					<div class="px-4">
						<h3 class="font-thin my-4 text-2xl">Expertise</h3>

						<ul class="list-reset">
							<li class="p-3">Front-end Development</li>
							<li class="border-t p-3">Designing User-interfaces</li>
							<li class="border-t p-3">Prototyping (Hi &amp; Lo-fidelity)</li>
							<li class="border-t p-3">Roadmaps</li>
							<li class="border-t p-3">Web application development</li>
							<li class="border-t p-3">Website Design</li>
							<li class="border-t p-3">Wire-framing</li>
						</ul>
					</div>
					<div class="px-4">
						<h3 class="font-thin my-4 text-2xl">Personal</h3>

						<ul class="list-reset">
							<li class="p-3">Attention to detail</li>
							<li class="border-t p-3">Dedicated</li>
							<li class="border-t p-3">Good Communication &amp; Personal skills</li>
							<li class="border-t p-3">Hard Working</li>
							<li class="border-t p-3">Lateral Thinking</li>
							<li class="border-t p-3">Problem Solving</li>
							<li class="border-t p-3">Supportive &amp; Team focused</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  </Layout>
</template>

<script>
import Skill from '~/components/Skill'
import GoogleDrive from '~/components/icons/GoogleDrive'

export default {
	components: {
		Skill,
		GoogleDrive
	},
  metaInfo: {
    title: "Skills and Experience - Alan Jenkins"
  }
};
</script>

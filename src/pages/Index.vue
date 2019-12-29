<template>
  <Layout>
		<div class="p-4 leading-normal text-black font-thin">
			<div class="flex-1 md:mx-4">
				<p class="text-2xl font-light">
					A hard-working, passionate and motivated designer, developer and manager with over 15 years experience in all aspects of web projects.
				</p>

				<p class="my-4">
					I strive for simple processes and efficiency wherever possible. Comfortable working as an individual, team member or manager. 
				</p>

				<p class="my-4">
					Currently a <span class="font-medium">Senior Front-end Developer</span> in the Optimisation team for the folks at
					<a
						href="https://www.visualsoft.co.uk"
						rel="noreferrer"
						target="_blank"
					>Visualsoft Ltd</a>.
					Previously, Associate Software Engineer at 
					<a
						href="https://sage.com/en-gb/"
						rel="noreferrer"
						target="_blank">Sage Group Plc</a>
					and Product Manager for the folks at
					<a
						href="https://www.claromentis.com/"
						rel="noreferrer"
						target="_blank">Claromentis</a>.
				</p>

				<p class="my-8 flex justify-center">
					<a
						href="https://docs.google.com/document/d/1xtrGsfAjW8s9hdqVEkJMyMfiJOYWCiiVVHyKB5Oxtes/edit?usp=sharing"
						class="flex items-center rounded shadow-md py-4 px-6 bg-primary hover:bg-primary-dark hover:text-grey-lightest text-grey-lighter mx-2"
						rel="noreferrer"
						target="_blank"
					>
						<GoogleDrive height="32" width="32" class="mr-4" />

						<div>
							<div class="font-medium">View Curriculum Vitae</div>
							<div class="text-xs">Google Doc</div>
						</div>
					</a>

					<a
						href="https://app.pluralsight.com/profile/alan-jenkins2"
						class="flex items-center rounded shadow-md py-4 px-6 bg-grey-darkest text-grey-lighter hover:text-grey-lightest hover:bg-black mx-2"
						rel="noreferrer"
						target="_blank"
					>
						<PluralSight class="mr-4" />
						<div>
							<div class="font-medium">Pluralsight</div>
							<div class="text-xs">Review Skill Assessments</div>
						</div>
					</a>
				</p>

				<div class="md:flex justify-between">
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

				<Social />
			</div>
		</div>
  </Layout>
</template>

<script>
import GoogleDrive from '~/components/icons/GoogleDrive'
import PluralSight from '~/components/icons/PluralSight'
import Social from '~/components/Social'

export default {
	components: {
		GoogleDrive,
		PluralSight,
		Social
	},

  metaInfo: {
    title: 'functionfirst - web design and development portfolio of alan jenkins'
  }
};
</script>

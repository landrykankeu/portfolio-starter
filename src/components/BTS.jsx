import {React} from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import fadeIn from '../variants'

function BTS(){
  return( 
  <div className='section' id='BTS'> 
    <div className="container mx-auto">
      <h1 className='text-[55px]  text-center font-bold leading-[0.8] lg:text-[80px]'>Presentation BTS SIO</h1>
        <div className="my-10 w-full backdrop-sepia-0 text-justify">
          <motion.p 
            initial="hidden"
            variants={fadeIn("left",0.5)}
            whileInView={'show'}
            viewport={{once:false, amount:0}}>
            Le <a href="https://www.onisep.fr/ressources/univers-formation/formations/Post-bac/bts-services-informatiques-aux-organisations-option-a-solutions-d-infrastructure-systemes-et-reseaux"className='font-semibold'>BTS SIO</a>, acronyme de "Services Informatiques aux Organisations", est une formation professionnelle dans le domaine de l'informatique. Il vise à former des techniciens spécialisés capables de concevoir, mettre en place et gérer des solutions informatiques pour répondre aux besoins des entreprises et des organisations.
            <h2 className='font-semibold'>Obejctif du BTS SIO </h2>
            Le principal objectif du BTS SIO est de former des professionnels de l'informatique capables de répondre aux besoins informatiques des organisations, que ce soit en termes de développement d'applications, de gestion de réseaux, de maintenance informatique, de support technique, ou de gestion de projets informatiques.Il est diviseé en deux options 
          </motion.p>
          <motion.div
            initial="hidden"
            variants={fadeIn("right",0.5)}
            whileInView={'show'}
            viewport={{once:false, amount:0}}
            className="lg:inline-flex mx-auto lg:gap-x-5">
            <div className="overflow-hidden ">
              <h3 className='font-semibold text-center'>SLAM</h3>
              <p>
                  <span className='font-semibold'>Option SLAM (Solutions Logicielles et Applications Métiers)</span>
                  <TypeAnimation
                    sequence={[
                      ": L'option SLAM du BTS SIO se concentre sur le développement d'applications informatiques sur mesure. Les étudiants apprennent à concevoir, programmer et maintenir des logiciels répondant aux besoins spécifiques des entreprises. Ils sont préparés à des carrières en tant que développeurs d'applications, analystes-programmeurs, chefs de projet informatique ou consultants en systèmes d'information. Cette option met l'accent sur la création de solutions logicielles adaptées aux besoins métiers, ce qui est essentiel dans un monde de plus en plus numérique et informatisé.",
                      1000,
                    ]}
                    speed={60}
                    repeat={'no'}
                    wrapper='span'
                  />
              </p>
            </div>
            <div className="bg-transparent overflow-hidden ">
              <h3 className='font-semibold text-center'>SISR</h3>
              <p>
                <span className='font-semibold'> Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</span>
                <TypeAnimation
                    sequence={[
                      " : L'option SISR du BTS SIO prépare les étudiants à devenir des spécialistes de la gestion des infrastructures informatiques. Ils acquièrent des compétences pour concevoir, configurer et administrer des systèmes, des réseaux et des services informatiques. Les diplômés de cette option sont qualifiés pour occuper des postes tels qu'administrateur système et réseau, technicien de maintenance informatique, ou responsable de la sécurité informatique, et sont responsables du bon fonctionnement des systèmes informatiques et de la sécurité des données.",
                      1000,
                    ]}
                    speed={60}
                    repeat={'no'}
                    wrapper='span'
                  />
              </p>
            </div>
          </motion.div> 
        </div>
    </div>
  </div>
  )}
export default BTS

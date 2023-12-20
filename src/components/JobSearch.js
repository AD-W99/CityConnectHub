import { Searchbar } from "./Searchbar"
import { JobSearchContainer } from "./containers/JobSearchContainer"
import { Button } from "primereact/button"
import { Feed } from "./Feed"

import styles from "../styles/JobSearch.module.css"

export function JobSearch() {
    const tempArr = [
        {
          title: "Software Engineer",
          companyName: "TechCo",
          location: "San Francisco, CA",
          postedTime: "2 days ago",
          description: `
          We are actively searching for a highly proficient and motivated software engineer to become an integral part of our dynamic 
          and innovative team. In this role, the successful candidate will play a crucial role in developing cutting-edge software 
          solutions that meet the evolving needs of our organization. As a key member of our team, you will have the opportunity to 
          collaborate with cross-functional teams, contribute to the entire software development lifecycle, and leverage your expertise 
          to create high-quality, scalable, and efficient software systems.
          
          The ideal candidate will possess a strong foundation in software engineering principles and a proven track record of successfully
          delivering complex projects. You will be responsible for designing, implementing, testing, and maintaining software applications, 
          ensuring they align with industry best practices and organizational goals. Additionally, the role involves staying abreast of 
          emerging technologies and industry trends to drive continuous improvement and innovation within our software development processes.
          
          This position offers a dynamic and collaborative work environment where creativity and problem-solving skills are highly valued. 
          The successful candidate will have the opportunity to work on diverse projects, contributing to the growth and success of our 
          organization. If you are passionate about software development, possess excellent communication skills, and thrive in a fast-paced, 
          forward-thinking environment, we encourage you to apply and join us on this exciting journey of technological advancement and 
          achievement.
          `,
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Mid-level",
          salary: "$90,000 - $110,000 per year"
        },
        {
          title: "Marketing Specialist",
          companyName: "MarketingHub",
          location: "New York, NY",
          postedTime: "1 week ago",
          description: `
          We invite a talented and creative marketing professional to join our dynamic marketing team and spearhead innovative campaigns 
          aimed at promoting our products. As a vital member of our team, you will play a pivotal role in developing and executing 
          marketing strategies that captivate our target audience and drive brand awareness. This exciting position offers the 
          opportunity to shape and implement compelling campaigns across various channels, utilizing your strategic thinking and 
          marketing expertise to maximize impact.

          The ideal candidate will bring a wealth of experience in marketing, with a proven track record of conceptualizing and 
          implementing successful campaigns. You will collaborate closely with cross-functional teams to understand market trends, 
          consumer behavior, and competitive landscapes, enabling you to tailor campaigns that resonate with our audience. In addition 
          to campaign management, you will analyze campaign performance metrics, providing insights that contribute to continuous 
          optimization and improvement.

          This role thrives on creativity, strategic thinking, and a passion for staying ahead of industry trends. 
          If you are a marketing professional who is adept at crafting engaging narratives, leveraging diverse marketing channels, 
          and is excited about contributing to the growth of our brand, we encourage you to apply. Join us in an environment that 
          fosters innovation, collaboration, and the opportunity to make a significant impact on the success of our products in the
          market.
          `,
          workType: "Part-time",
          contractType: "Contract",
          experienceLevel: "Entry-level",
          salary: "$50,000 - $60,000 per year"
        },
        {
          title: "Data Scientist",
          companyName: "Data Insights Inc.",
          location: "Seattle, WA",
          postedTime: "3 days ago",
          description: `
          An exhilarating opportunity awaits a skilled and ambitious data scientist to join our team and take on the challenge of 
          analyzing and interpreting complex data sets. As a pivotal member of our organization, you will be at the forefront of 
          leveraging your expertise to extract meaningful insights from diverse data sources. This role offers a unique chance to 
          contribute to cutting-edge projects, employing advanced analytical techniques and methodologies to address complex business 
          problems.

          The successful candidate will have a strong foundation in data science principles, with a proven ability to handle intricate 
          data sets and derive actionable intelligence. You will collaborate with cross-functional teams to define analytical objectives, 
          design experiments, and develop models that enhance decision-making processes. In addition to your analytical prowess, you 
          will play a key role in communicating findings effectively to both technical and non-technical stakeholders, driving informed 
          decision-making across the organization.

          This position is ideal for a data scientist who thrives in a dynamic and intellectually stimulating environment. You will have 
          the opportunity to stay abreast of the latest advancements in data science, machine learning, and artificial intelligence, 
          contributing to the continuous improvement of our analytical capabilities. If you are passionate about unraveling the 
          complexities of data, possess strong problem-solving skills, and are eager to make a substantial impact, we encourage you to 
          apply and embark on this exciting journey with us.
          `,
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Senior-level",
          salary: "$120,000 - $150,000 per year"
        },
        {
          title: "Graphic Designer",
          companyName: "DesignStudio",
          location: "Los Angeles, CA",
          postedTime: "4 days ago",
          description: `
          Embark on a thrilling opportunity to showcase your creative talents as a graphic designer, contributing to the development of 
          visually stunning designs for both print and digital media in our collaborative and dynamic work environment. As an integral 
          part of our creative team, you will have the chance to bring innovative ideas to life, working on diverse projects that span a 
          range of mediums.

          The ideal candidate will be adept at translating concepts into captivating visual designs that resonate with our target 
          audience. In this role, you will collaborate closely with cross-functional teams, including marketing, content creation, and 
          web development, to ensure a cohesive and visually appealing brand presence across all channels. Your creativity will be at 
          the forefront as you conceptualize and execute designs that not only meet but exceed our aesthetic standards.

          This position offers an exciting opportunity to contribute to the overall brand identity and visual storytelling of our 
          organization. Whether it's designing engaging social media graphics, eye-catching promotional materials, or user-friendly 
          website interfaces, you'll have the chance to make a lasting impact. If you are a passionate and innovative graphic designer 
          who thrives in a collaborative environment, we invite you to apply and be part of a team where your creativity can flourish 
          and shape the visual identity of our brand.
          `,
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Mid-level",
          salary: "$70,000 - $80,000 per year"
        },
        {
          title: "Customer Support Specialist",
          companyName: "SupportPro",
          location: "Chicago, IL",
          postedTime: "1 day ago",
          description: `
          We are actively seeking a dedicated individual to join our team and play a pivotal role in providing exceptional customer 
          support through various channels. As a valuable member of our customer support team, you will be responsible for addressing 
          customer issues and inquiries, ensuring a positive and satisfying experience for our clients.

          The ideal candidate will possess strong communication skills and a customer-centric mindset, striving to exceed customer 
          expectations with each interaction. In this role, you will handle inquiries through diverse channels such as email, chat, and 
          phone, employing your problem-solving skills to efficiently resolve issues. Additionally, you will serve as a knowledgeable 
          resource, offering product information, troubleshooting assistance, and guidance to customers to enhance their overall 
          satisfaction.

          This position offers an exciting opportunity to make a direct impact on customer satisfaction and loyalty. You will 
          collaborate closely with other departments to escalate and resolve complex issues, contributing to a seamless customer 
          experience. If you are passionate about delivering exceptional customer service, possess excellent interpersonal skills, and 
          thrive in a fast-paced environment, we encourage you to apply and join us in ensuring that our customers receive top-notch 
          support and assistance.
          `,
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Entry-level",
          salary: "$45,000 - $55,000 per year"
        }
    ]

    return (
        <JobSearchContainer>
            <div className={styles.searchbarContainer}>
                <Searchbar floatLabel="Job Title" />
                <Searchbar floatLabel="Location" icon="pi pi-compass" />
                <Button label="Search" />
            </div>
            <div className={styles.feedsContainer}>
                <Feed listings={tempArr} />
                <Feed listings={tempArr} />
            </div>
        </JobSearchContainer>
    )
}
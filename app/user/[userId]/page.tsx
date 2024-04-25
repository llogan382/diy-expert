import { UserSkillsForm } from "@/app/components.tsx/skillsForm";

export default function Page({params}: {params: { userId: string}}){
    return( 
        <div>
            <div>
                User contact info
            </div>
            <div>
                Form to add skills
            </div>
        <UserSkillsForm />
        </div>
    )
}
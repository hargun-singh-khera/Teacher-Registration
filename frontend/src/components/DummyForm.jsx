const DummyForm = () => {
    const genderOptions = ["Male", "Female", "Other"];
    return (
        <div class="h-screen flex justify-center py-5 sm:py-[60px] mx-5">
            <form class="w-3xl">
                <h1 className="text-center text-2xl font-medium pb-3">Teacher Registration Form</h1>
                <h3 className="text-lg py-4">General Details</h3>
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="name" inputType="text" placeholder="Enter your name" isRequired={true} />
                    {/* <div class="flex flex-col text-left gap-2">
                      <label for="" class="text-sm text-gray-900">Name*</label>
                      <input type="text" class="px-5 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-400" placeholder="Enter your name" />
                    </div> */}
                    <InputField label="email" inputType="email" placeholder="Enter your email" isRequired={true} />
                    {/* <div class="flex flex-col text-left gap-2">
                      <label for="" class="text-sm text-gray-900">Email*</label>
                      <input type="text" class="px-5 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
                    </div> */}
                    <InputField label="password" inputType="text" placeholder="Enter your password" isRequired={true} />
                    {/* <div class="flex flex-col text-left gap-2">
                      <label for="" class="text-sm text-gray-900">Password*</label>
                      <input type="text" class="px-5 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
                    </div> */}
                    <InputField label="phone" inputType="text" placeholder="Enter your phone" isRequired={true} />
                    {/* <div class="flex flex-col text-left gap-2">
                      <label for="" class="text-sm text-gray-900">Phone*</label>
                      <input type="text" class="px-5 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-400" placeholder="Enter your phone number" />
                    </div> */}
                    <div class="flex flex-col text-left gap-2">
                        <Dropdown label="gender" options={genderOptions} isRequired={true} />
                    </div>
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Profile Image</label>
                        <FileInput />
                    </div>
                    <div class="flex flex-col text-left gap-2">
                        <Textarea label="bio" placeholder="Enter bio..." />
                    </div>
                </div>
                <h3 className="text-lg pb-4 pt-[30px]">Professional Details</h3>
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm">Class Names</label>
                        <MultiSelectDropdown />
                    </div>
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Subjects</label>
                        <MultiSelectDropdown />
                    </div>
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Qualifications</label>
                        <MultiSelectDropdown />
                    </div>
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Board</label>
                        <MultiSelectDropdown />
                    </div>
                    <InputField label="school" inputType="text" placeholder="Enter school" />
                    <InputField label="students mentored" inputType="number" placeholder="Enter students mentored" />
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Resume Upload</label>
                        <FileInput />
                    </div>
                </div>
                <h3 className="text-lg pb-4 pt-[30px]">Address Details</h3>
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="area" inputType="text" placeholder="Enter area" />
                    <InputField label="street" inputType="text" placeholder="Enter street" />
                    <InputField label="city" inputType="text" placeholder="Enter city" />
                    <InputField label="landmark" inputType="text" placeholder="Enter landmark" />
                    <InputField label="country" inputType="text" placeholder="Enter country" />
                </div>
                <h3 className="text-lg pb-4 pt-[30px]">Social Links</h3>
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="linkedin" inputType="text" placeholder="Enter linkedin" />
                </div>
                <h3 className="text-lg pb-4 pt-[30px]">Documents</h3>
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2 mb-5">
                    <div class="flex flex-col text-left gap-2">
                        <label for="" class="text-sm text-gray-900">Documents Upload</label>
                        <FileInput />
                    </div>
                </div>
                <Button />
            </form>
        </div>
    )
}
export default DummyForm
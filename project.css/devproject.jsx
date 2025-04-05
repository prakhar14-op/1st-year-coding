import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import React from "react";

// Mock data for units
const units = [
  {
    id: 2,
    name: "UNIT-2",
    subject: "COMPLEX ANALYSIS",
    progress: 25,
    color: "#43b6e3",
  },
  {
    id: 5,
    name: "UNIT-5",
    subject: "PROGRAMMING FUND.",
    progress: 85,
    color: "#e52929",
  },
  {
    id: 1,
    name: "UNIT-1",
    subject: "MATLAB PROG.",
    progress: 70,
    color: "#e52929",
  },
  { id: 4, name: "UNIT-4", subject: "AM-102.", progress: 55, color: "#4f47aa" },
  {
    id: 3,
    name: "UNIT-3",
    subject: "PYTHON PROG.",
    progress: 40,
    color: "#43b6e3",
  },
];

// Mock data for time spent chart
const weekdays = ["MON", "TUES", "WED", "THURS", "FRI", "SAT"];
const subjects = [
  { name: "SUBJECT1", color: "#e52929" },
  { name: "SUBJECT2", color: "#43b6e4" },
  { name: "SUBJECT 3", color: "#4f47aa" },
];

export default function Desktop() {
  return (
    <div className="bg-[#edeefe] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#edeefe] overflow-hidden w-full max-w-[1524px] relative">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 w-[246px] h-full bg-white">
          <div className="pt-[199px] px-[59px]">
            <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[44px] whitespace-nowrap">
              dashboard
            </div>

            <div className="mt-[58px] [font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#a6a9d4] text-2xl tracking-[0] leading-[44px] whitespace-nowrap">
              subject
            </div>

            <div className="mt-[81px] [font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#acaede] text-2xl tracking-[0] leading-[44px] whitespace-nowrap">
              RESOURCES
            </div>

            <div className="mt-[76px] [font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#acafde] text-2xl tracking-[0] leading-[44px] whitespace-nowrap">
              learning plan
            </div>
          </div>

          {/* Learning plan card */}
          <div className="absolute w-[198px] h-[298px] bottom-[49px] left-[17px] bg-[#dad3d375] rounded-[50px_50px_50px_0px]">
            <div className="w-[148px] h-[153px] absolute bottom-[37px] left-[26px] bg-white rounded-[50px_50px_50px_0px]"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="ml-[246px] p-8 relative">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-2xl">
              dashboard
            </div>

            <div className="flex items-center gap-4">
              <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#9c9db1] text-2xl">
                date,day
              </div>

              <div className="w-12 h-12 bg-[#9ba7f5] rounded-[10px]"></div>
            </div>
          </header>

          {/* Welcome banner */}
          <Card className="w-full max-w-[930px] h-[221px] bg-[#f4b3b3c2] rounded-[50px] mb-8 border-none">
            <CardContent className="p-8 relative">
              <div className="[font-family:'Nexa_Rust_Script_B-Trial-Regular',Helvetica] font-normal text-[40px] tracking-[0] leading-[44px]">
                <span className="text-[#cd3f2f]">welcome back buddy</span>
                <span className="text-black">!</span>
              </div>

              <div className="mt-10 [font-family:'Nexa_Rust_Slab-Trial-Black3',Helvetica] font-black text-black text-xs tracking-[0] leading-[normal]">
                this week you learned ------hrs and ----questions
              </div>

              <div className="absolute right-10 top-0">
                <img
                  src=""
                  alt="Student illustration"
                  className="w-[397px] h-[262px]"
                />

                <div className="absolute top-[69px] left-[268px] w-[69px] h-[33px] bg-[#d96969] rounded-md flex flex-col justify-center items-center">
                  <div className="w-4 h-[15px] bg-[#fffefe82] rounded-[3px]"></div>
                  <div className="w-[34px] h-[3px] bg-[#fffefe8c] mt-1"></div>
                  <div className="w-[25px] h-[3px] bg-[#ffffff8f] mt-1"></div>
                </div>

                <div className="absolute top-[159px] left-[59px] w-[246px] h-[5px] bg-[#ec5656] rounded-sm"></div>

                <div className="absolute top-[90px] left-[130px] w-[104px] h-[69px] bg-[#d8dcf0] rounded">
                  <div className="absolute top-[28px] left-[43px] w-[17px] h-[13px] bg-white rounded-[8.5px/6.5px]"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main content cards */}
          <div className="flex gap-8 mb-8">
            {/* Latest results card */}
            <Card className="w-[362px] h-[428px] bg-[#f5f0f0] rounded-[40px] shadow-[5px_4px_4px_#00000040] border-none">
              <CardHeader className="flex flex-row justify-between items-center pb-2">
                <CardTitle className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-2xl">
                  latest result
                </CardTitle>
                <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-xl">
                  more
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                {units.map((unit, index) => (
                  <div key={unit.id} className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#a53434] text-xl mr-2">
                        {unit.name}
                      </div>
                      <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-[#4f47aa] text-[15px]">
                        -{unit.subject}
                      </div>
                    </div>
                    <Progress
                      value={unit.progress}
                      className="h-[7px] bg-[#fffefe]"
                      style={{
                        "--progress-background": unit.color,
                      }}
                    />
                    {index < units.length - 1 && (
                      <Separator className="my-4 bg-[#d9d9d9]" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Time spent card */}
            <Card className="w-[525px] h-[428px] bg-[#f5f1f1] rounded-[40px] shadow-[4px_4px_4px_#00000040] border-none">
              <CardHeader>
                <CardTitle className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-2xl">
                  time spend on learning :
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between mb-4">
                  {weekdays.map((day) => (
                    <div key={day} className="text-center">
                      <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-2xl">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between h-[241px] relative">
                  {weekdays.map((day, index) => (
                    <div
                      key={`bar-${day}`}
                      className="relative w-[15px] h-full flex flex-col-reverse"
                    >
                      {index < 3 && (
                        <>
                          {/* Bars for each subject - only for first 3 days */}
                          <div
                            className="w-full"
                            style={{
                              height: `${index === 0 ? 53 : index === 1 ? 66 : 25}px`,
                              backgroundColor: subjects[0].color,
                            }}
                          />
                          <div
                            className="w-full"
                            style={{
                              height: `${index === 0 ? 79 : index === 1 ? 139 : 159}px`,
                              backgroundColor: subjects[2].color,
                            }}
                          />
                          <div
                            className="w-full"
                            style={{
                              height: `${index === 0 ? 53 : index === 1 ? 0 : 53}px`,
                              backgroundColor: subjects[1].color,
                            }}
                          />
                        </>
                      )}
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundColor: index < 3 ? "white" : "#d9d9d9",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex mt-8 justify-around">
                  {subjects.map((subject) => (
                    <div key={subject.name} className="flex items-center">
                      <Badge
                        className="w-4 h-4 mr-2 rounded"
                        style={{ backgroundColor: subject.color }}
                      />
                      <div className="[font-family:'Gang_of_Three-Regular',Helvetica] font-normal text-black text-base">
                        {subject.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom cards */}
          <div className="flex gap-6">
            <Card className="w-[314px] h-[132px] bg-[#9192c7] rounded-[50px] border-none"></Card>
            <Card className="w-[255px] h-[135px] bg-[#7cc3d7] rounded-[50px] border-none"></Card>
            <Card className="w-[277px] h-[135px] bg-[#d18888] rounded-[50px] border-none"></Card>
          </div>
        </div>

        {/* Profile sidebar */}
        <div className="fixed right-0 top-0 w-[262px] h-full bg-[#fefeff] rounded-[50px_0px_0px_50px]">
          <div className="flex justify-center pt-[142px]">
            <Avatar className="w-[166px] h-[152px] rounded-[83px/76px] bg-[#eceaea]">
              <AvatarImage src="" alt="Profile" className="w-[162px] h-40" />
              <AvatarFallback className="bg-[#eceaea] rounded-[83px/76px]"></AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}


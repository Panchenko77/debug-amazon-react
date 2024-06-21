import axios from "axios";
import { FormEvent, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

interface Props {
  sectionTitle: string;
}

const FeedbackBox = (props: Props) => {
  const [like, setLike] = useState<any>(null);
  const [comment, setComment] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (like === null) {
      alert("Please clicked like or disklike");
      return;
    }

    const payload = {
      comment,
      sectionTitle: props.sectionTitle,
      like,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASEURL}/feedback`, payload)
      .then(() => {
        setLike(null);
        setComment("");
        alert('Feedback has been submitted');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="text-[#797979] mt-5">
        <div className="mb-10">
          <div>
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 bg-slate-300 p-4 mt-5 rounded-md"
            >
              <button
                type="button"
                className={
                  like === true
                    ? "p-2 text-2xl text-black hover:text-black"
                    : "p-2 text-2xl hover:text-black"
                }
                onClick={() => setLike(true)}
              >
                <AiOutlineLike />
              </button>
              <button
                type="button"
                className={
                  like === false
                    ? "p-2 text-2xl text-black hover:text-black"
                    : "p-2 text-2xl hover:text-black"
                }
                onClick={() => setLike(false)}
              >
                <AiOutlineDislike />
              </button>

              <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className="w-full  border border-gray-700 p-2"
                placeholder="Comment"
              />
              <button
                type="submit"
                className="py-2 px-10 bg-[#5236FF] hover:bg-[#422ae0] text-white text-xl rounded-full"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackBox;

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import asideR_img1 from "../../../assets/Image/asideR_img1.svg";
import PostImgSect from "./PostImgSect";
import CommentContainer from "./CommentContainer";

const ModalComponent = ({ isOpen, onClose, card }) => {
  const [open, setOpen] = useState(isOpen);

  const commentsData = [
    {
      id: 1,
      userimg: asideR_img1,
      name: "Bria Anna Chloe",
      username: "@chloe_anna",
      date: "September 15, 2023",
      caption:
        "I feel like NFTs are the starting point in a new evolution of digital asset ownership. Who knows what's coming next in the blockchain ecosystem?",
    },
    {
      id: 2,
      userimg: asideR_img1,
      name: "Napat Saeng",
      username: "@napattsaeng",
      date: "September 16, 2023",
      caption:
        "I like the idea that NFTs can provide royalties to creators every time their digital asset is resold. It offers long-term support for artists.",
    },
    {
      id: 3,
      userimg: asideR_img1,
      name: "Oga Zabegina",
      username: "@zabeginaoga",
      date: "September 16, 2023",
      caption: `Yeah Nice Idea.`,
    },
    {
      id: 4,
      userimg: asideR_img1,
      name: "Rafaella Mendes",
      username: "@rafaellamendes",
      date: "September 16, 2023",
      caption: `Yeah Nice Idea.`,
    },
  ];

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {/* MODAL CONTENT */}
            <div className="grid grid-cols-3 my-28 mx-80 bg-white shadow-2xl">
              <PostImgSect card={card} />
              <CommentContainer commentsData={card.commentsData} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalComponent;

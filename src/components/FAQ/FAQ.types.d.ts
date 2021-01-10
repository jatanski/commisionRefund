export interface FAQViewProps {
  faqClassName: string;
  isClosedAllCollapses: boolean;
}

export interface CollapseProps {
  collapse: {
    buttonText: string;
    desc1: string;
    desc2?: string;
    desc3?: string;
  };
  isClosedCollapse: boolean;
}

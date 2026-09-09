import React, { useState } from 'react';
import { Video, MessageSquare, Check, Tag } from 'lucide-react';
import './PlanCard.css';

// Plus / Cross Decorative SVG Watermark
const CrossWatermark = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="bg-watermark-cross"
    aria-hidden="true"
  >
    <path
      d="M38 12 C38 6 44 6 50 6 C56 6 62 6 62 12 L62 38 L88 38 C94 38 94 44 94 50 C94 56 94 62 88 62 L62 62 L62 88 C62 94 56 94 50 94 C44 94 38 94 38 88 L38 62 L12 62 C6 62 6 56 6 50 C6 44 6 38 12 38 L38 38 Z"
      stroke="#00C0FF"
      strokeWidth="7"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const planData = {
  Individual: {
    Live: {
      title: 'Therapy',
      trial: {
        isTrialOffer: true,
        tagline: 'Start your therapy journey with expert support',
        therapyBadges: [],
        subtitleType: '1 private video session',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: 740,
        originalPrice: 1470,
        pricePeriod: '/ first week',
        priceClarification: 'First week ₹740 · Regular pricing applies after the trial',
        promoBadgeText: 'Limited-time offer: First week ₹740',
        ctaText: 'Start My 1-Week Trial →',
        showPromoBanner: true,
        features: [
          "Understand what you're going through · 60-min private session",
          'Know what to work on next · Personalized recovery plan',
          'Keep making progress between sessions · Daily therapist chat',
          'Talk when you need to be heard · 1 listener session',
          'Build healthier everyday habits · Guided meditations & self-care',
          'Find the right therapist for you · Switch if needed',
          'Try therapy before committing · Pay weekly',
        ],
        mobileFeatures: [
          "Understand what you're facing · 60-min private session",
          'Know what to work on next · Recovery pathway',
          'Stay supported · Daily therapist chat',
          'Talk when you need someone · 1 listener session',
          'Build healthier habits · Meditations & self-care',
          'Find the right fit · Switch therapist if needed',
          'Try therapy risk-free · Pay weekly',
        ],
      },
      '1m': {
        is1mIndividual: true,
        introHeading: 'Build a consistent therapy routine',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 10%' }],
        subtitleType: '4 private video sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '5,290',
        originalPrice: '5,880',
        pricePeriod: '/ month',
        priceSubtext: '',
        ctaText: 'Start 1 Month of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through your challenges regularly · 4 weekly 60-min sessions',
          'Stay supported between sessions · Daily therapist chat',
          'Know what to focus on next · Personalized recovery plan',
          'Track your progress over time · 40+ psychological assessments',
          'Have someone to talk to when you need it · 4 listener sessions',
          'Build healthier habits outside therapy · Yoga, groups & self-care',
          'Stay flexible · Switch therapist if needed',
          'Cancel anytime · No long-term lock-in',
        ],
        mobileFeatures: [
          'Work through challenges · 4 weekly 60-min sessions',
          'Stay supported · Daily therapist chat',
          'Know what to focus on · Recovery pathway',
          'Track your progress · 40+ assessments',
          'Talk when you need it · 4 listener sessions',
          'Build healthier habits · Yoga, groups & tools',
          'Find the right fit · Switch therapist if needed',
          'Stay flexible · Cancel anytime',
        ],
      },
      '3m': {
        is3mIndividualLive: true,
        introHeading: 'Build lasting progress with structured support',
        introText: 'Work consistently on your goals with regular therapy, progress reviews and support between sessions.',
        therapyBadges: [
          { type: 'save', text: 'Save 20%' },
        ],
        subtitleType: '12 private video sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '14,110',
        originalPrice: '17,640',
        pricePeriod: '/ 3 months',
        priceSubtext: '',
        ctaText: 'Start 3 Months of Therapy →',
        showPromoBanner: false,
        secondaryInclusionsText: 'Pay every 3 months · Cancel anytime',
        features: [
          'Work through your challenges · 12 weekly 60-min therapy sessions',
          'Stay supported between sessions · Daily therapist chat + 12 listener sessions',
          'Know what to focus on next · Personalized recovery pathway',
          'Track your progress · 40+ psychological assessments + mid-plan review',
          'Build healthier habits · Mindfulness, yoga, groups & guided self-care',
          'Get support that fits you · Switch therapist if needed',
        ],
        mobileFeatures: [
          'Work through challenges · 12 weekly 60-min sessions',
          'Stay supported · Daily chat + 12 listener sessions',
          'Know what to focus on · Recovery pathway',
          'Track your progress · 40+ assessments + review',
          'Build healthier habits · Yoga, mindfulness & groups',
          'Find the right fit · Switch therapist if needed',
        ],
      },
      '6m': {
        is6mIndividual: true,
        introHeading: 'Work toward lasting change with consistent support',
        introText: 'Six months of therapy to work on your goals, track progress, and build healthier habits.',
        therapyBadges: [{ type: 'save', text: 'Save 24%' }],
        subtitleType: '24 private sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '26,820',
        originalPrice: '35,280',
        pricePeriod: '/ 6 months',
        priceSubtext: '',
        ctaText: 'Start 6 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through your challenges · 24 private 60-min therapy sessions',
          'Know what to work on next · Personalized recovery pathway',
          'See how you\'re progressing · 40+ psychological assessments + mid-plan review',
          'Stay supported throughout · Daily therapist chat + 24 listener sessions',
          'Build healthier habits · Mindfulness, Mind Body Yoga & group sessions',
          'Get support that fits you · Switch therapist if needed',
        ],
        mobileFeatures: [
          'Work through challenges · 24 private 60-min sessions',
          'Know what to work on · Recovery pathway',
          'Track your progress · 40+ assessments + review',
          'Stay supported · Daily chat + 24 listener sessions',
          'Build healthier habits · Yoga, mindfulness + groups',
          'Find the right fit · Switch therapist if needed',
        ],
      },
      durationSaves: {
        '1m': 'Save 10%',
        '3m': 'Save 20%',
        '6m': 'Save 24%',
      },
    },
    Chat: {
      title: 'Therapy',
      trial: {
        isTrialOffer: true,
        tagline: 'Start your therapy journey with expert support',
        therapyBadges: [],
        subtitleType: '1 chat session',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: 430,
        originalPrice: 860,
        pricePeriod: '/ first week',
        priceClarification: 'First week ₹430 · Regular pricing applies after the trial',
        promoBadgeText: 'Limited-time offer: First week ₹430',
        ctaText: 'Start My 1-Week Trial →',
        showPromoBanner: true,
        features: [
          "Get clarity on what you're going through · 60-min therapy chat",
          'Know what to work on next · Personalized recovery pathway',
          'Stay supported between sessions · Daily therapist chat',
          'Talk when you need to be heard · 1 listener session',
          'Build healthier everyday habits · Guided meditations & self-care tools',
          'Find the right therapist for you · Switch if needed',
          'Try therapy before committing · Pay weekly',
        ],
        mobileFeatures: [
          "Get clarity on what you're facing · 60-min therapy chat",
          'Know what to work on next · Recovery pathway',
          'Stay supported · Daily therapist chat',
          'Talk when you need someone · 1 listener session',
          'Build healthier habits · Meditations & tools',
          'Find the right fit · Switch if needed',
          'Try therapy risk-free · Pay weekly',
        ],
      },
      '1m': {
        is1mIndividual: true,
        introHeading: 'Build a consistent therapy routine',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 10%' }],
        subtitleType: '4 chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '3,070',
        originalPrice: '3,410',
        pricePeriod: '/ month',
        priceSubtext: '',
        ctaText: 'Start 1 Month of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through your challenges regularly · 4 weekly 60-min chat sessions',
          'Stay supported between sessions · Daily therapist chat',
          'Know what to focus on next · Personalized recovery pathway',
          'Track your progress · 40+ psychological assessments',
          'Talk when you need it · 4 listener sessions',
          'Build healthier habits · Yoga, groups & self-care',
          'Stay flexible · Switch therapist if needed',
          'Cancel anytime · Pay monthly',
        ],
        mobileFeatures: [
          'Work through challenges · 4 weekly 60-min chat sessions',
          'Stay supported · Daily therapist chat',
          'Know what to focus on · Recovery pathway',
          'Track your progress · 40+ assessments',
          'Talk when you need it · 4 listener sessions',
          'Build healthier habits · Yoga, groups & tools',
          'Find the right fit · Switch therapist if needed',
          'Stay flexible · Cancel anytime',
        ],
      },
      '3m': {
        is3mIndividual: true,
        introHeading: 'Build momentum with support that fits your day',
        introText: 'Get regular therapist guidance for 3 months, stay on track between sessions, and keep working toward your goals.',
        therapyBadges: [
          { type: 'save', text: 'Save 21%' },
        ],
        subtitleType: '12 chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '8,130',
        originalPrice: '10,320',
        pricePeriod: '/ quarterly',
        priceSubtext: '',
        ctaText: 'Start 3 Months of Therapy →',
        showPromoBanner: false,
        secondaryInclusionsText: 'Pay every 3 months · Cancel anytime',
        features: [
          'Know what to work on next · Personalized recovery pathway',
          'Get regular therapist guidance · 12 private chat sessions',
          'Stay supported between sessions · Daily therapist chat + 12 listener sessions',
          'Keep making progress · 40+ assessments + mid-plan review',
          'Build healthier habits · Mindfulness, yoga, groups & guided self-care',
          'Get support that fits you · Switch therapist if needed',
        ],
        mobileFeatures: [
          'Know what to work on · Recovery pathway',
          'Get regular guidance · 12 private chat sessions',
          'Stay supported · Daily chat + 12 listener sessions',
          'Track your progress · 40+ assessments + review',
          'Build healthier habits · Yoga, mindfulness & groups',
          'Find the right fit · Switch therapist if needed',
        ],
      },
      '6m': {
        is6mIndividual: true,
        introHeading: 'Build lasting change with ongoing support',
        introText: 'Six months of therapist support to work on your goals, build healthier habits, and stay on track.',
        therapyBadges: [{ type: 'save', text: 'Save 24%' }],
        subtitleType: '24 chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '650',
        originalPrice: '660',
        pricePeriod: '/session',
        priceSubtext: '',
        ctaText: 'Start 6 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges consistently · 24 therapist chat sessions',
          'Know what to focus on next · Personalized recovery pathway',
          'Stay supported between sessions · Daily therapist chat',
          'Build healthier habits · Mindfulness, yoga & self-care tools',
          'See how you\'re progressing · Psychological assessments + progress review',
          'Get support when you need it · 24 listener sessions',
          'Stay flexible · Switch therapist if needed',
        ],
        mobileFeatures: [
          'Work through challenges · 24 therapist chat sessions',
          'Know what to focus on · Recovery pathway',
          'Stay supported · Daily therapist chat',
          'Build healthier habits · Yoga, mindfulness & tools',
          'Track your progress · Assessments + review',
          'Get support when needed · 24 listener sessions',
          'Find the right fit · Switch therapist if needed',
        ],
      },
      durationSaves: {
        '1m': 'Save 10%',
        '3m': 'Save 21%',
        '6m': 'Save 24%',
      },
    },
  },
  Couple: {
    Live: {
      title: 'Therapy',
      trial: {
        therapyBadges: [],
        subtitleType: '1 Video session',
        origStrikethrough: 2210,
        subPriceText: '₹ 1100 Weekly',
        currentPrice: 1100,
        originalPrice: 2210,
        showPromoBanner: true,
        features: [
          '1 Couples Therapy Video/Audio Session (60 mins)',
          'Group and Personal Chat Support with Your Couples Therapist',
          '1 Listener Sessions',
          'Personalized Relationship Recovery Pathway',
          'Switch Providers if the fit isn\'t right',
          'Pay Weekly (Trial price for first week, then regular subscription pricing)',
        ],
      },
      '1m': {
        therapyBadges: [{ type: 'save', text: 'Save 10%' }],
        subtitleType: '4 Video sessions',
        origStrikethrough: null,
        subPriceText: '₹ 8000 Monthly',
        currentPrice: 2000,
        originalPrice: 2210,
        showPromoBanner: false,
        features: [
          'Dedicated Private Therapist',
          'Unlimited Messaging Support',
          '4 Video/Phone Sessions (60 mins each)',
          'Weekly Couple Therapy Sessions',
          'Access to 40+ Assessments',
          'Unlimited App Access (Meditation, Yoga, Self care Tools, Relationship Resources)',
          'Flexible Monthly Billing',
        ],
      },
      '3m': {
        therapyBadges: [
          { type: 'chosen', text: 'Most chosen' },
          { type: 'save', text: 'Save 20%' },
        ],
        subtitleType: '12 Video sessions',
        origStrikethrough: null,
        subPriceText: '₹ 21170 Quarterly',
        currentPrice: 1760,
        originalPrice: 2210,
        showPromoBanner: false,
        features: [
          'Dedicated Private Therapist',
          'Unlimited Messaging Support',
          'Weekly Couple Therapy Sessions',
          '12 Video/Phone Sessions (60 mins each)',
          '40+ Assessments & Personalized Progress Tracking',
          'Unlimited App Access (Meditation, Yoga, Self care Tools, Relationship Resources)',
          'Free Therapist Switch Anytime',
          'Pay Once Every 3 Months',
        ],
      },
      '6m': {
        therapyBadges: [{ type: 'save', text: 'Save 24%' }],
        subtitleType: '24 Video sessions',
        origStrikethrough: null,
        subPriceText: '₹ 40240 Half yearly',
        currentPrice: 1680,
        originalPrice: 2210,
        showPromoBanner: false,
        features: [
          'Dedicated Private Therapist',
          'Unlimited Messaging Support',
          'Weekly Couple Therapy Sessions',
          '24 Video/Phone Sessions (60 mins each)',
          '40+ Assessments & Personalized Relationship Growth Tracking',
          'Unlimited App Access (Meditation, Yoga, Self care Tools, Relationship Resources)',
          'Free Therapist Switch Anytime',
          'Priority Therapist Matching',
          'Pay Every 6 Months',
        ],
      },
      durationSaves: {
        '1m': 'Save 10%',
        '3m': 'Save 20%',
        '6m': 'Save 24%',
      },
    },
    Chat: {
      title: 'Therapy',
      trial: {
        therapyBadges: [],
        subtitleType: '1 Chat session',
        origStrikethrough: 1300,
        subPriceText: '₹ 650 Weekly',
        currentPrice: 650,
        originalPrice: 1300,
        showPromoBanner: true,
        features: [
          'Private therapist',
          'Unlimited messages',
          '1 Listener Session',
          'Daily responses for a week',
          'Unlimited app access with Meditation, Yoga & Self-care tools',
          'Pay Weekly (Trial price for first week, then regular subscription pricing)',
        ],
      },
      '1m': {
        therapyBadges: [{ type: 'save', text: 'Save 12%' }],
        subtitleType: '4 Chat sessions',
        origStrikethrough: null,
        subPriceText: '₹ 4600 Monthly',
        currentPrice: 1150,
        originalPrice: 1300,
        showPromoBanner: false,
        features: [
          'Private therapist',
          'Unlimited messages',
          '4 chat sessions',
          'Assessments',
          'Daily responses for a week',
          'Unlimited app access with Meditation, Yoga & Self-care tools',
          'Pay every month',
        ],
      },
      '3m': {
        therapyBadges: [
          { type: 'chosen', text: 'Most chosen' },
          { type: 'save', text: 'Save 21%' },
        ],
        subtitleType: '12 Chat sessions',
        origStrikethrough: null,
        subPriceText: '₹ 12350 Quarterly',
        currentPrice: 1030,
        originalPrice: 1300,
        showPromoBanner: false,
        features: [
          'Private therapist',
          'Unlimited messages',
          '12 chat sessions',
          'Assessments',
          'Daily responses for a week',
          'Unlimited app access with Meditation, Yoga & Self-care tools',
          'Pay every 3 months',
        ],
      },
      '6m': {
        therapyBadges: [{ type: 'save', text: 'Save 25%' }],
        subtitleType: '24 Chat sessions',
        origStrikethrough: null,
        subPriceText: '₹ 23290 Half yearly',
        currentPrice: 970,
        originalPrice: 1300,
        showPromoBanner: false,
        features: [
          'Private therapist',
          'Unlimited messages',
          '24 chat sessions',
          'Assessments',
          'Daily responses for a week',
          'Unlimited app access with Meditation, Yoga & Self-care tools',
          'Pay every 6 months',
        ],
      },
      durationSaves: {
        '1m': 'Save 12%',
        '3m': 'Save 21%',
        '6m': 'Save 25%',
      },
    },
  },
  Intern: {
    Live: {
      title: 'Therapy Intern Live Counselling',
      trial: {
        isTrialOffer: true,
        introHeading: 'Start your therapy journey with expert support',
        introText: '',
        therapyBadges: [],
        subtitleType: '1 private video session',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: 260,
        originalPrice: 530,
        pricePeriod: '/ first week',
        priceClarification: 'First week ₹260 · Regular pricing applies after the trial',
        promoBadgeText: 'Limited-time offer: First week ₹260',
        ctaText: 'Start My 1-Week Trial →',
        showPromoBanner: true,
        features: [
          'Work through challenges · 1 private 60-min session',
          'Know what to focus on · Personalised recovery pathway',
          'Stay supported · Daily therapist chat + listener session',
          'Build healthier habits · Mindfulness, yoga & self-care',
          'Find the right fit · Switch providers if needed',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 1 private 60-min session',
          'Know what to focus on · Personalised recovery pathway',
          'Stay supported · Daily chat + listener session',
          'Build healthier habits · Mindfulness, yoga & tools',
          'Find the right fit · Switch providers if needed',
          'Stay flexible · Cancel anytime',
        ],
      },
      '1m': {
        is1mIndividual: true,
        introHeading: 'Build a consistent therapy routine',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 11%' }],
        subtitleType: '4 private video sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '1,890',
        originalPrice: '2,120',
        pricePeriod: '/ month',
        priceSubtext: '',
        ctaText: 'Start 1 Month of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 4 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Psychological assessments',
          'Stay supported · Daily therapist chat',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 4 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Psychological assessments',
          'Stay supported · Daily therapist chat',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      '3m': {
        is3mIndividualLive: true,
        introHeading: 'Build lasting progress with structured support',
        introText: '',
        therapyBadges: [
          { type: 'save', text: 'Save 21%' },
        ],
        subtitleType: '12 private video sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '5,040',
        originalPrice: '6,360',
        pricePeriod: '/ 3 months',
        priceSubtext: '',
        ctaText: 'Start 3 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 12 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 12 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      '6m': {
        is6mIndividual: true,
        introHeading: 'Work toward lasting change with consistent support',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 25%' }],
        subtitleType: '24 private video sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '9,580',
        originalPrice: '12,720',
        pricePeriod: '/ 6 months',
        priceSubtext: '',
        ctaText: 'Start 6 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 24 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 24 weekly 60-min sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      durationSaves: {
        '1m': 'Save 11%',
        '3m': 'Save 21%',
        '6m': 'Save 25%',
      },
    },
    Chat: {
      title: 'Therapy Intern Chat Counselling',
      trial: {
        isTrialOffer: true,
        introHeading: 'Start your therapy journey with expert support',
        introText: '',
        therapyBadges: [],
        subtitleType: '1 private chat session',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: 160,
        originalPrice: 320,
        pricePeriod: '/ first week',
        priceClarification: 'First week ₹160 · Regular pricing applies after the trial',
        promoBadgeText: 'Limited-time offer: First week ₹160',
        ctaText: 'Start My 1-Week Trial →',
        showPromoBanner: true,
        features: [
          'Work through challenges · 1 private 60-min chat',
          'Know what to focus on · Personalised recovery pathway',
          'Stay supported · Daily therapist chat + listener session',
          'Build healthier habits · Guided meditations & self-care',
          'Find the right fit · Switch providers if needed',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 1 private 60-min chat',
          'Know what to focus on · Personalised recovery pathway',
          'Stay supported · Daily chat + listener session',
          'Build healthier habits · Meditations & tools',
          'Find the right fit · Switch providers if needed',
          'Stay flexible · Cancel anytime',
        ],
      },
      '1m': {
        is1mIndividual: true,
        introHeading: 'Build a consistent therapy routine',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 16%' }],
        subtitleType: '4 private chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '1,090',
        originalPrice: '1,280',
        pricePeriod: '/ month',
        priceSubtext: '',
        ctaText: 'Start 1 Month of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 4 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Psychological assessments',
          'Stay supported · Daily therapist chat',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 4 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Psychological assessments',
          'Stay supported · Daily therapist chat',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      '3m': {
        is3mIndividual: true,
        introHeading: 'Build lasting progress with structured support',
        introText: '',
        therapyBadges: [
          { type: 'save', text: 'Save 25%' },
        ],
        subtitleType: '12 private chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '2,900',
        originalPrice: '3,840',
        pricePeriod: '/ 3 months',
        priceSubtext: '',
        ctaText: 'Start 3 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 12 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 12 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      '6m': {
        is6mIndividual: true,
        introHeading: 'Work toward lasting change with consistent support',
        introText: '',
        therapyBadges: [{ type: 'save', text: 'Save 28%' }],
        subtitleType: '24 private chat sessions',
        origStrikethrough: null,
        subPriceText: '',
        currentPrice: '5,540',
        originalPrice: '7,680',
        pricePeriod: '/ 6 months',
        priceSubtext: '',
        ctaText: 'Start 6 Months of Therapy →',
        showPromoBanner: false,
        features: [
          'Work through challenges · 24 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
        mobileFeatures: [
          'Work through challenges · 24 weekly 60-min chat sessions',
          'Know what to focus on · Personalised recovery pathway',
          'Track your progress · Assessments + progress review',
          'Stay supported · Daily chat + listener support',
          'Build healthier habits · Mindfulness, yoga & groups',
          'Stay flexible · Switch providers or cancel anytime',
        ],
      },
      durationSaves: {
        '1m': 'Save 16%',
        '3m': 'Save 25%',
        '6m': 'Save 28%',
      },
    },
  },
};

export default function PlanCard({
  currencySymbol = '₹',
  planCategory = 'Individual',
  onCategoryChange,
  isInternMode = false,
  onExitInternMode,
}) {
  const [category, setCategory] = useState(planCategory); // 'Individual' | 'Couple' | 'Intern'
  const [mode, setMode] = useState('Live'); // 'Live' | 'Chat'
  const [selectedDuration, setSelectedDuration] = useState('trial'); // 'trial' | '1m' | '3m' | '6m'

  // If in intern mode
  const activeCategoryKey = isInternMode ? 'Intern' : category;
  const currentCategoryData = planData[activeCategoryKey] || planData.Individual;
  const currentModeData = currentCategoryData[mode] || currentCategoryData.Live;
  const activePlan = currentModeData[selectedDuration] || currentModeData.trial;
  const durationSaves = currentModeData.durationSaves;
  const planTitle = currentModeData.title || 'Therapy';

  const durationOptions = [
    { id: 'trial', label: 'Trial offer', saveText: '' },
    { id: '1m', label: '1 Month', saveText: durationSaves['1m'] },
    { id: '3m', label: '3 Months', saveText: durationSaves['3m'], isPopular: true },
    { id: '6m', label: '6 Months', saveText: durationSaves['6m'] },
  ];

  const displayFeatures = activePlan.features;

  const handleCategorySelect = (newCategory) => {
    setCategory(newCategory);
    if (onCategoryChange) onCategoryChange(newCategory);
  };

  return (
    <section className="plans-section" aria-label="Therapy Plans Selection">
      {/* Title & Underline */}
      <div className="plans-heading-wrap">
        <h2 className="plans-heading">Choose the plan that works best for you</h2>
        <div className="plans-heading-underline" aria-hidden="true"></div>
      </div>

      {/* Main Card with Background Watermark */}
      <div className="card-outer-container">
        <CrossWatermark />

        <div className="plan-card">
          {/* Top Category Tabs: Only visible when not in Intern mode */}
          {!isInternMode && (
            <div className="category-tabs" role="tablist">
              <button
                type="button"
                className={`category-tab-btn ${category === 'Individual' ? 'active' : ''}`}
                onClick={() => handleCategorySelect('Individual')}
                role="tab"
                aria-selected={category === 'Individual'}
              >
                Individual
              </button>
              <button
                type="button"
                className={`category-tab-btn ${category === 'Couple' ? 'active' : ''}`}
                onClick={() => handleCategorySelect('Couple')}
                role="tab"
                aria-selected={category === 'Couple'}
              >
                Couple
              </button>
            </div>
          )}

          {/* Format Mode Toggle: Live / Chat */}
          <div className="mode-toggle-wrap">
            <button
              type="button"
              className={`mode-btn ${mode === 'Live' ? 'active' : ''}`}
              onClick={() => setMode('Live')}
            >
              Live
            </button>
            <button
              type="button"
              className={`mode-btn ${mode === 'Chat' ? 'active' : ''}`}
              onClick={() => setMode('Chat')}
            >
              Chat
            </button>
          </div>

          {/* Plan Intro for Trial Offer (when tagline only) */}
          {activePlan.isTrialOffer && activePlan.tagline && !activePlan.introHeading && (
            <div className="plan-intro-section">
              <p className="plan-intro-desc-clean">{activePlan.tagline}</p>
            </div>
          )}

          {/* Plan Intro with Heading + Value line */}
          {activePlan.introHeading && (
            <div className="plan-intro-section">
              <h3 className="plan-intro-title">{activePlan.introHeading}</h3>
              {activePlan.introText && (
                <p className="plan-intro-desc">{activePlan.introText}</p>
              )}
            </div>
          )}

          {/* Plan Header & Pricing Details */}
          <div className="plan-header-row">
            <div className="plan-title-group">
              <div className="plan-icon-box">
                {mode === 'Live' ? (
                  <Video size={19} strokeWidth={2.5} />
                ) : (
                  <MessageSquare size={19} strokeWidth={2.5} />
                )}
              </div>
              <div className="plan-title-info">
                <div className="plan-title-top-row">
                  {planTitle.includes('Therapy Intern') ? (
                    <div className="plan-intern-title-stack">
                      <span className="plan-title-main">Therapy Intern</span>
                      <div className="plan-title-sub-row">
                        <span className="plan-title-sub">{mode === 'Live' ? 'Live Counselling' : 'Chat Counselling'}</span>
                        {activePlan.therapyBadges.length > 0 && (
                          <div className="plan-badges-wrap">
                            {activePlan.therapyBadges.map((badge, idx) => (
                              <span
                                key={idx}
                                className={badge.type === 'chosen' ? 'badge-chosen' : 'badge-save'}
                              >
                                {badge.text}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="plan-title-text">{planTitle}</span>
                      <div className="plan-badges-wrap">
                        {activePlan.therapyBadges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={badge.type === 'chosen' ? 'badge-chosen' : 'badge-save'}
                          >
                            {badge.text}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="plan-subtitle-text">
                  {activePlan.subtitleType && <span>{activePlan.subtitleType}</span>}
                  {activePlan.origStrikethrough && (
                    <span className="plan-strike-orig">
                      {currencySymbol}{activePlan.origStrikethrough}
                    </span>
                  )}
                  {activePlan.subPriceText && (
                    <span className="plan-sub-price">
                      {activePlan.subPriceText}
                    </span>
                  )}
                  {activePlan.secondaryPriceRef && (
                    <span className="plan-secondary-ref">
                      {activePlan.secondaryPriceRef}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="plan-price-group">
              <div className="plan-current-price-row">
                <span className="plan-current-price">
                  {currencySymbol}{activePlan.currentPrice}
                </span>
                <span className="plan-session-label">
                  {activePlan.pricePeriod || '/session'}
                </span>
              </div>
              {activePlan.priceSubtext ? (
                <div className="plan-price-subtext">
                  {activePlan.priceSubtext}
                </div>
              ) : (
                <div className="plan-strikethrough-total">
                  {currencySymbol}{activePlan.originalPrice}
                </div>
              )}
            </div>
          </div>

          {/* Feature Checklist */}
          <ul className="feature-list">
            {displayFeatures.map((feature, index) => {
              const mobileFeature = activePlan.mobileFeatures && activePlan.mobileFeatures[index]
                ? activePlan.mobileFeatures[index]
                : feature;

              // Parse desktop feature
              const hasDot = feature.includes(' · ');
              const [dtOutcome, dtDetail] = hasDot
                ? feature.split(' · ')
                : [feature, ''];

              // Parse mobile feature
              const mHasDot = mobileFeature.includes(' · ');
              const [mOutcome, mDetail] = mHasDot
                ? mobileFeature.split(' · ')
                : [mobileFeature, ''];

              return (
                <li key={index} className="feature-item">
                  <Check className="feature-check-icon" strokeWidth={3} />
                  
                  {/* Desktop text view */}
                  <span className="feature-text-wrap feature-text-desktop">
                    {hasDot ? (
                      <>
                        <span className="feature-outcome">{dtOutcome}</span>
                        <span className="feature-dot"> · </span>
                        <span className="feature-detail">{dtDetail}</span>
                      </>
                    ) : (
                      <span>{feature}</span>
                    )}
                  </span>

                  {/* Mobile text view (shorter, prevents wrapping) */}
                  <span className="feature-text-wrap feature-text-mobile">
                    {mHasDot ? (
                      <>
                        <span className="feature-outcome">{mOutcome}</span>
                        <span className="feature-dot"> · </span>
                        <span className="feature-detail">{mDetail}</span>
                      </>
                    ) : (
                      <span>{mobileFeature}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Secondary Inclusions Line */}
          {activePlan.secondaryInclusionsText && (
            <div className="secondary-inclusions-wrap">
              <span className="secondary-inclusions-text">
                {activePlan.secondaryInclusionsText}
              </span>
            </div>
          )}

          {/* Promotional Discount Banner */}
          {activePlan.showPromoBanner && (
            <div className="promo-banner">
              {!activePlan.promoBadgeText && <Tag className="promo-tag-icon" />}
              <span className="promo-text">
                {activePlan.promoBadgeText || 'Introductory price for your first session'}
              </span>
            </div>
          )}

          {/* Tenure / Duration Selector */}
          <div className="duration-grid">
            {durationOptions.map((opt) => {
              const isSelected = selectedDuration === opt.id;
              const is3Months = opt.id === '3m';

              return (
                <div key={opt.id} className="duration-col">
                  {is3Months && (
                    <span
                      className={`popular-badge ${isSelected ? 'selected' : ''}`}
                    >
                      Most Popular
                    </span>
                  )}
                  <button
                    type="button"
                    className={`duration-btn ${isSelected ? 'active' : ''} ${
                      is3Months && !isSelected ? 'has-popular-border' : ''
                    }`}
                    onClick={() => setSelectedDuration(opt.id)}
                  >
                    {opt.label}
                  </button>
                  <span className="duration-save-label">{opt.saveText}</span>
                </div>
              );
            })}
          </div>

          {/* Small Pricing Clarification Text if provided */}
          {activePlan.priceClarification && (
            <p className="plan-price-clarification">
              {activePlan.priceClarification}
            </p>
          )}

          {/* Action CTA Button */}
          <button
            type="button"
            className="proceed-btn"
            onClick={() => {
              alert(
                `Proceeding to pay for ${planTitle} (${mode}) - ${
                  durationOptions.find((d) => d.id === selectedDuration)?.label
                } at ${currencySymbol}${activePlan.currentPrice}${activePlan.pricePeriod || '/session'}`
              );
            }}
          >
            {activePlan.ctaText || 'Proceed to Pay'}
          </button>
        </div>
      </div>
    </section>
  );
}

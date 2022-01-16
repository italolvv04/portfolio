import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFigma } from 'react-icons/fa'
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di';

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={DiHtml5} boxSize="50" />
            <Icon as={DiCss3} boxSize="50" />
            <Icon as={DiJavascript1} boxSize="50" />
            <Icon as={FaFigma} boxSize="50" />
        </HStack>
    )
}

export default Social
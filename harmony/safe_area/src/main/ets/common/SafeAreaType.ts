/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ColorSegments } from '../descriptor'

export type Edge = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export type EdgeInsets = {
  top: number
  right: number
  bottom: number
  left: number
}

export type Edges = {
  top: string
  right: string
  bottom: string
  left: string
}

export type borderColor = {
  top?: ColorSegments
  right?: ColorSegments
  bottom?: ColorSegments
  left?: ColorSegments
}

export type Frame = {
  x: number
  y: number
  width: number
  height: number
}

export type Event = {
  insets: EdgeInsets
  frame: Frame
}

export type Rect = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export type AvoidArea = {
  margin?: Rect | number
  padding?: Rect | number
}

export type AvoidAreaProps = {
  edges: string
  mode: string
  margin: string
  padding: string
}

export type Tag = number;